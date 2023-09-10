import PropTypes from 'prop-types';
import logoLinkedin from "../../assets/logos/linkedin.png";

const Estudiante = ({ nombre, linkedin, descripción, imagen }) => {
    return (
        <div className="flex flex-wrap items-center mt-8">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-gray-100">
                    {nombre}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-100">
                    {descripción}
                </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded-lg bg-orange-400">
                    <img
                        alt="..."
                        src={imagen}
                        className="w-full align-middle rounded-t-lg max-h-[300px] object-cover"
                    />
                    <blockquote className="relative p-4">
                        <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block"
                            style={{
                                height: "95px",
                                top: "-94px"
                            }}
                        >
                            <polygon
                                points="-30,95 583,95 583,65"
                                className="text-orange-400 fill-current"
                            ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                            Contacto:
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                            <div className='flex flex-wrap items-center'>
                                <img className="w-8 h-8 mr-5" src={logoLinkedin} />
                                <a href={linkedin} target="_blank" rel="noopener noreferrer" className=" text-blue-600 font-bold">
                                    Linkedin
                                </a>
                            </div>
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Estudiante;
Estudiante.propTypes = {
    nombre: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    descripción: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
};