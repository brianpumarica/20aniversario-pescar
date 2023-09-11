import imagen1 from "../assets/estudiantes/brian.png";
import imagen2 from "../assets/estudiantes/rodrigo.jpeg";
import imagen3 from "../assets/estudiantes/martin.png";

import imagen5 from "../assets/estudiantes/maxi.png";
import imagen6 from "../assets/estudiantes/alex.jpeg";
import imagen7 from "../assets/estudiantes/tadeo.jpg"
import Estudiante from "../components/shared/Estudiante";

function Emprendimientos() {
    return (
        <div>
            <section>
                <div className="container mx-auto px-4 pb-12">
                    {/* Estudiante 1 */}
                    <Estudiante 
                        nombre="Brian Pumarica" 
                        linkedin="https://www.linkedin.com/in/brian-martin-pumarica/" 
                        descripción="Desarrollador Web con especialización en React, Angular, Node, Express, SQL, entre otros." 
                        imagen={imagen1}
                    />
                    {/* Estudiante 2 */}
                    <Estudiante 
                        nombre="Rodrigo Cabrera" 
                        linkedin="https://www.linkedin.com/in/brian-martin-pumarichttps://www.linkedin.com/in/rodrigo-cabrera-developer/" 
                        descripción="Desarrollador Web Full-Stack MERN y estudiante de Desarrollo de Software. Tecnologías: React, React Native, Node.js, MongoDB, PHP, entre otras." 
                        imagen={imagen2}
                    />
                    {/* Estudiante 3 */}
                    <Estudiante 
                        nombre="Martin Virun" 
                        linkedin="https://www.linkedin.com/in/martin-virun-1b5a20220/" 
                        descripción="Estudiante de programación en la UTN Avellaneda y alumno de la fundación Pescar, y me sueño es trabajar de lo que le apasiona y llegar a ser un gran profesional." 
                        imagen={imagen3}
                    />
                    {/* Estudiante 4 */}
                    <Estudiante 
                        nombre="Tadeo Abbruzzese" 
                        linkedin="https://www.linkedin.com/in/tadeo-abbruzzese" 
                        descripción="Estudiante de Ingenieria Informática y alumno de la Fundación Pescar. Me especializo en el Desarrollo Web Full stack MERN y en Ciencia de Datos con Python y R" 
                        imagen={imagen7}
                    />
                    {/* Estudiante 5 */}
                    <Estudiante 
                        nombre="Maximiliano Dorado" 
                        linkedin="https://www.linkedin.com/in/maximiliano-dorado/" 
                        descripción="Estudiante de Analista Programador Universitario en la UNLP, egresado de la Fundacion Pescar como Full Stack MERN, profundizando en Python actualmente, en busca de seguir aprendiendo." 
                        imagen={imagen5}
                    />
                    {/* Estudiante 6 */}
                    <Estudiante 
                        nombre="Alexander Mamani" 
                        linkedin="https://www.linkedin.com/in/alexander-mamani/" 
                        descripción="Desarrollador Web Fullstack Estudiante de Ingeniería en sistemas en la UTN, Tecnologías: NextJS, Nodejs, MongoDB, MySQL, Typescript, React Native." 
                        imagen={imagen6}
                    />
                </div>
            </section>
        </div>
    );
}
/**
 * Desarrollador Web Fullstack Estudiante de Ingeniería en sistemas en la UTN, Tecnologías: NextJS, Nodejs, MongoDB, MySQL, Typescript, React Native
 */
export default Emprendimientos;
