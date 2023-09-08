import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./imageCarrousel.css";
import ActionButtons from "./shared/ActionButtons";
import BannerBienvenida from "./shared/BannerBienvenida";

const ImageCarousel = ({ images }) => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1200); /* Modificar la velocidad de movimiento del carrusel */

        return () => {
            clearInterval(scrollInterval);
        };
    }, [images.length]);

    const carouselStyles = {
        transform: `translateX(-${currentIndex * (800 / images.length)}%)`,
        transition: "transform 0.5s linear", // Añadimos una transición CSS para un movimiento suave.
    };

    return (
        <section
            ref={carouselRef}
            className="flex flex-col mt-5 text-white bg-fixed"
        >
            <BannerBienvenida />
            <ActionButtons />

            <div className="carousel-container mt-5">
                {" "}
                {/* Carousel de imágenes */}
                <div className="carousel" style={carouselStyles}>
                    {images.map((imageUrl, index) => (
                        <div key={index} className="carousel-image">
                            <img src={imageUrl} alt={`img-${index}`} draggable="false" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

ImageCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;
