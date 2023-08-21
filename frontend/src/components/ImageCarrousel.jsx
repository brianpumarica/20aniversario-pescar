import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ImageCarousel = ({ images }) => {
    const carouselRef = useRef(null);
    const [isDragStart, setIsDragStart] = useState(false);
    const [prevPageX, setPrevPageX] = useState(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState(0);

    useEffect(() => {
        const carousel = carouselRef.current;

        const showHideIcons = () => {
            // Mostrando y escondiendo los íconos de acuerdo a la posición del carrusel
            let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
            arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
            arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
        };

        const handleArrowClick = (icon) => {
            let firstImgWidth = firstImg.clientWidth + 14;
            carousel.scrollLeft += icon === "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60);
        };

        const handleDragStart = (e) => {
            setIsDragStart(true);
            setPrevPageX(e.pageX || e.touches[0].pageX);
            setPrevScrollLeft(carousel.scrollLeft);
        };

        const handleDragging = (e) => {
            if (!isDragStart) return;
            e.preventDefault();
            carousel.classList.add("dragging");
            let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
            carousel.scrollLeft = prevScrollLeft - positionDiff;
            showHideIcons();
        };

        const handleDragStop = () => {
            setIsDragStart(false);
            carousel.classList.remove("dragging");
        };

        const arrowIcons = document.querySelectorAll(".wrapper i");
        const firstImg = carousel.querySelectorAll("img")[0];

        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                handleArrowClick(icon.id);
            });
        });

        carousel.addEventListener("mousedown", handleDragStart);
        carousel.addEventListener("touchstart", handleDragStart);

        carousel.addEventListener("mousemove", handleDragging);
        carousel.addEventListener("touchmove", handleDragging);

        carousel.addEventListener("mouseup", handleDragStop);
        carousel.addEventListener("mouseleave", handleDragStop);
        carousel.addEventListener("touchleave", handleDragStop);

        return () => {
            // Limpieza de event listeners al desmontar el componente
            arrowIcons.forEach(icon => icon.removeEventListener("click", handleArrowClick));
            carousel.removeEventListener("mousedown", handleDragStart);
            carousel.removeEventListener("touchstart", handleDragStart);
            carousel.removeEventListener("mousemove", handleDragging);
            carousel.removeEventListener("touchmove", handleDragging);
            carousel.removeEventListener("mouseup", handleDragStop);
            carousel.removeEventListener("mouseleave", handleDragStop);
            carousel.removeEventListener("touchleave", handleDragStop);
        };
    }, [isDragStart, prevPageX, prevScrollLeft]);

    return (
        <section
            ref={carouselRef}
            className="flex flex-col h-4/5 bg-[url('https://www.pescar.org.ar/wp-content/uploads/2021/10/Home-slider1.jpg')] bg-cover bg-no-repeat bg-center text-white bg-fixed"
        >

<div className="flex-1 flex items-center">
    <div className="text-center mx-auto flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-semibold">Pescar 20 Años 🥳</h1>
        <p className="font-light text-2xl mt-5">¡Bienvenido!</p>
        <Link className="px-5 py-2 inline-block text-white transition-colors mt-1" to="https://www.pescar.org.ar/quienes-somos/">
            <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Quiénes Somos</button>
        </Link>
        <Link to="/signin" className="text-center mx-auto">
            <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">   
                Iniciar Sesión
            </button>
        </Link>
        <Link to="/category/Pescar">
            <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Jugar
            </button>
        </Link>
        <Link to="/home">
            <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Informacion de usuarios/invitados
            </button>
        </Link>
    </div>
</div>



            <div className="wrapper">
                <i id="left" className="fa-solid fa-angle-left"></i>
                <div className="carousel">
                    {images.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt={`img-${index}`} draggable="false" />
                    ))}
                </div>
                <i id="right" className="fa-solid fa-angle-right"></i>
            </div>
        </section>
    );
}

ImageCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;
