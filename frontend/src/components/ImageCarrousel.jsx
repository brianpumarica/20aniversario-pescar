import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './imageCarrousel.css'

const ImageCarousel = ({ images }) => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const extendedImages = [...images, ...images]; // Duplicamos las imágenes para repetirlas, para que no se quede sin imagenes nunca.

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedImages.length);
        }, 900); /* Modificar la velocidad de movimiento del carrousel */

        return () => {
            clearInterval(scrollInterval);
        };
    }, [extendedImages.length]);

    const carouselStyles = {
        transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
    };

    return (
        <section
            ref={carouselRef}
            className="flex flex-col h-4/5 text-white bg-fixed"
        >

            <div className="flex-1 flex items-center"> {/* Botones y links */}
                <div className="text-center mx-auto flex flex-col items-center space-y-2 gap-2">
                    <h1 className="text-4xl font-semibold">¡Fundación Pescar cumple 20 Años! 🥳</h1>
                    <p className="font-light text-2xl mt-5">¡Bienvenido!</p>
                    <a
                        className="px-5 inline-block text-white transition-colors mt-1"
                        href="https://www.pescar.org.ar/quienes-somos/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            ¿Quiénes Somos?
                        </button>
                    </a>

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
                            Información de invitados
                        </button>
                    </Link>
                </div>
            </div>

            <div className="carousel-container"> {/* Carousel de imagenes */}
                <div className="carousel" style={carouselStyles}>
                    {extendedImages.map((imageUrl, index) => (
                        <div
                            key={index}
                            className="carousel-image"
                        >
                            <img src={imageUrl} alt={`img-${index}`} draggable="false" />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

ImageCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;