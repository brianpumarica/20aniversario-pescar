import './homePageStyles.css'
import ImageCarousel from '../components/ImageCarrousel';
// import PropTypes from 'prop-types';

const imagenesCarrousel = [
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2021/10/EquipoPescar_Silvia-web.jpg?fit=400%2C400&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2021/10/EquipoPescar-9073-web.jpg?fit=400%2C400&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2021/10/EquipoPescar-8994-web.jpg?fit=400%2C400&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2021/10/EquipoPescar-8999-web.jpg?fit=400%2C400&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2021/10/EquipoPescar-9100-web.jpg?fit=400%2C400&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/05/Majo-web.jpg?fit=768%2C768&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/05/Marie-web-1.jpg?fit=768%2C768&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/06/Flor-F-web-1.png?fit=499%2C499&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/05/Adriana-web.jpg?fit=768%2C768&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2021/10/EquipoPescar-8984-web.jpg?fit=400%2C400&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2021/10/EquipoPescar_fran-web.jpg?fit=400%2C400&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/06/Lu-t-web.png?fit=768%2C768&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/06/Belu-Palleros-web.png?fit=499%2C499&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/03/Maria-Web.png?fit=768%2C768&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/03/Mili-Web-1.png?fit=768%2C768&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/06/Sabri-web.png?fit=768%2C768&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/06/Cesar-web.png?fit=768%2C768&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/06/Jime-web.png?fit=768%2C768&ssl=1',
    'https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2023/06/Pau-M-web.png?fit=768%2C768&ssl=10',
]

// export const HomePage = ({auth}) => {
export const HomePage = () => {
        return (
        <div className="h-screen bg-[url('https://www.pescar.org.ar/wp-content/uploads/2021/10/Home-slider1.jpg')] bg-cover bg-no-repeat bg-center">

            {/* <ImageCarousel auth={auth} images={imagenesCarrousel} /> */}
            
            <ImageCarousel images={imagenesCarrousel} />
        </div>
    );
}
// HomePage.propTypes = {
//     auth: PropTypes.bool.isRequired, // Agregar la validación para 'auth'
// };