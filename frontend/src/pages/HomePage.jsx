import './homePageStyles.css'
import ImageCarousel from '../components/ImageCarrousel';
// import PropTypes from 'prop-types';

export const imagenesCarrousel = [
    'https://i.postimg.cc/SNG0sbgz/3.png',
    'https://i.postimg.cc/SKPbhLDT/6.png',
    'https://i.postimg.cc/MGNN46pg/Artech.png',
    'https://i.postimg.cc/ZKmt45xS/Belleza-Por-Un-Futuro.jpg',
    'https://i.postimg.cc/G3GwWyYK/Belleza-Por-Un-Futuro1.jpg',
    'https://i.postimg.cc/V6bQLShY/Bellezaporunfuturo2.jpg',
    'https://i.postimg.cc/MHyCVCxN/Bellezaporunfuturo2-1.jpg',
    'https://i.postimg.cc/0QSF1T6j/bellezaporunfuturo3.jpg',
    'https://i.postimg.cc/FHFMkC6C/Capacitaciones-Volvo-Palmero-18.jpg',
    'https://i.postimg.cc/0ytLYdRk/Capacitaciones-Volvo-Palmero-20.jpg',
    'https://i.postimg.cc/kGFHBWvd/Capacitaciones-Volvo-Palmero-36.jpg',
    'https://i.postimg.cc/8cV3pZWH/Capacitaciones-Volvo-Palmero-48.jpg',
    'https://i.postimg.cc/MK54wbG7/Capacitaciones-Volvo-Palmero-52.jpg',
    'https://i.postimg.cc/VLmT2Hzs/Capacitaciones-Volvo-Palmero-55.jpg',
    'https://i.postimg.cc/MpGLpMch/Capacitaciones-Volvo-Palmero-56.jpg',
    'https://i.postimg.cc/13Yjnmw4/Capacitaciones-Volvo-Palmero-59.jpg',
    'https://i.postimg.cc/XvGD9RkL/Capacitaciones-Volvo-Palmero-67.jpg',
    'https://i.postimg.cc/ZqGsHwfS/Capacitaciones-Volvo-Palmero-70.jpg',
    'https://i.postimg.cc/fLY2rYF0/Capacitaciones-Volvo-Palmero-73.jpg',
    'https://i.postimg.cc/fyZ2nJnq/Capacitaciones-Volvo-Palmero-77.jpg',
    'https://i.postimg.cc/DZcQG6H5/CP-AAP.png',
    'https://i.postimg.cc/764Mbdsf/CP-Andromaco.png',
    'https://i.postimg.cc/7L3SvXHD/CP-Bemberg.png',
    'https://i.postimg.cc/Y92G5HDf/CP-BxF.png',
    'https://i.postimg.cc/W39FjHQR/CP-Corteva.png',
    'https://i.postimg.cc/MGmf3T5p/CP-Disney.png',
    'https://i.postimg.cc/kMp6pLQK/CP-JPM.png',
    'https://i.postimg.cc/vHxgFXhj/CP-Makro.png',
    'https://i.postimg.cc/wvBMWk3w/CP-MP.png',
    'https://i.postimg.cc/x8JCQTvH/CP-PAE.png',
    'https://i.postimg.cc/mkvrgfjn/CP-Salesforce.png',
    'https://i.postimg.cc/VsrnmYLD/CP-Santander.png',
    'https://i.postimg.cc/RhHM8pmL/CP-Volvo.png',
    'https://i.postimg.cc/d1Xs5Pb0/Glaciar-Pesquera.png',
    'https://i.postimg.cc/fWpyKmsv/IMG-1948.jpg',
    'https://i.postimg.cc/4NcdFyNR/IMG-1972.jpg',
    'https://i.postimg.cc/Bncv4zKh/IMG-1985.jpg',
    'https://i.postimg.cc/2Sf6pYVb/IMG-2020.jpg',
    'https://i.postimg.cc/HLYkxt0T/IMG-2058-baja.jpg',
    'https://i.postimg.cc/vBD87HSj/IMG-2077.jpg',
    'https://i.postimg.cc/q71MCCQy/Orientadores-Pescar.jpg',
    'https://i.postimg.cc/KvtT3JTT/Orientadores-Pescar.jpg',
    'https://i.postimg.cc/zG5gCKwc/PAE-B31.png',
    'https://i.postimg.cc/C1WZzqLJ/Palmero.png',
    'https://i.postimg.cc/Nf8yjLh7/Pampa.png',
    'https://i.postimg.cc/y8PSvxvY/Pescar-AA200-Loreal-2019-30.jpg',
    'https://i.postimg.cc/1tgnmHPf/Pescar-Andromaco-2019-18.jpg',
    'https://i.postimg.cc/JhzHg823/Pescar-Andromaco-2019-2.jpg',
    'https://i.postimg.cc/LsQgFWcc/Pescar-Andromaco-2019-8.jpg',
    'https://i.postimg.cc/Hs1cmXNk/PESCAR-BXFCORDOBA2021-16.jpg',
    'https://i.postimg.cc/hvTXxtXn/PESCAR-BXFCORDOBA2021-2.jpg',
    'https://i.postimg.cc/3rv4znnq/PESCAR-BXFCORDOBA2021-3.jpg',
    'https://i.postimg.cc/g2YxXdm9/PESCAR-MAKROCBA2021-19.jpg',
    'https://i.postimg.cc/cJC6hmvX/PESCAR-MAKROCBA2021-20.jpg',
    'https://i.postimg.cc/cH8CyLM3/PESCAR-SANTANDER2021-16.jpg',
    'https://i.postimg.cc/SKPRvM8q/PESCAR-SANTANDER2021-7.jpg',
    'https://i.postimg.cc/pXBTt78s/Santander.png',
    'https://i.postimg.cc/sDzXqyBB/USAL.png',
    'https://i.postimg.cc/j205sYZF/Whats-App-Image-2023-09-04-at-17-53-31.jpg'
];

// export const HomePage = ({auth}) => {
export const HomePage = () => {
        return (
        <div 
        // className="min-h-[80vh] bg-[url('https://www.pescar.org.ar/wp-content/uploads/2021/10/Home-slider1.jpg')] bg-cover bg-no-repeat bg-center"
        > {/* Este lo DEJO COMENTADO porque en Home aparecia con un fondo duplicado. REVISAR */}
            
            <ImageCarousel images={imagenesCarrousel} />
        </div>
    );
}