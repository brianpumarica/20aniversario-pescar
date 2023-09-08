import imagen1 from "../assets/estudiantes/brian.jpg";
import imagen2 from "../assets/estudiantes/rodrigo.jpeg";
import imagen3 from "../assets/estudiantes/martin.jpg";

import imagen5 from "../assets/estudiantes/maxi.jpg";
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
                        descripción="RESUMEN." 
                        imagen={imagen1}
                    />
                    {/* Estudiante 5 */}
                    <Estudiante 
                        nombre="Maximiliano Dorado" 
                        linkedin="https://www.linkedin.com/in/maximiliano-dorado/" 
                        descripción="Desarrollador Web capacitado en React, Node, Python, Git y apasionado por el rubro IT y las Ciencias Agrarias y Forestales." 
                        imagen={imagen5}
                    />
                </div>
            </section>
        </div>
    );
}
export default Emprendimientos;
