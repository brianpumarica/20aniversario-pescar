import imagen1 from "../assets/estudiantes/brian.jpg";
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
                        descripción="RESUMEN." 
                        imagen={imagen1}
                    />
                    {/* Estudiante 3 */}
                    <Estudiante 
                        nombre="Martin Virun" 
                        linkedin="https://www.linkedin.com/in/martin-virun-1b5a20220/" 
                        descripción="RESUMEN." 
                        imagen={imagen1}
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
                        descripción="RESUMEN." 
                        imagen={imagen1}
                    />
                </div>
            </section>
        </div>
    );
}
export default Emprendimientos;
