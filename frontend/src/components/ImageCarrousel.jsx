import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './imageCarrousel.css';
import ActionButtons from './shared/ActionButtons';

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
        transition: 'transform 1s linear', // Añadimos una transición CSS para un movimiento suave.
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

                    <ActionButtons />
                </div>
            </div>

            <div className="carousel-container"> {/* Carousel de imágenes */}
                <div className="carousel" style={carouselStyles}>
                    {images.map((imageUrl, index) => (
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
