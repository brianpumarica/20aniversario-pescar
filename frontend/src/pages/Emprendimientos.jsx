import imagen1 from "../assets/emprendedores/img1.jpg";
import imagen2 from "../assets/emprendedores/img2.jpeg";
import imagen3 from "../assets/emprendedores/img3.jpeg";
import imagen4 from "../assets/emprendedores/img4.jpeg";
import imagen5 from "../assets/emprendedores/img5.jpeg";
import imagen6 from "../assets/emprendedores/img6.jpeg";
import imagen7 from "../assets/estudiantes/maxi.jpg";
import imagen8 from "../assets/estudiantes/brian.png";
import logo1 from "../assets/emprendedores/logo1.jpg";
import logo2 from "../assets/emprendedores/logo2.jpg";
import logo3 from "../assets/emprendedores/logo3.jpg";
import logo4 from "../assets/emprendedores/logo4.jpg";
import logo5 from "../assets/emprendedores/logo5.jpeg";

function Emprendimientos() {
    return (
        <div
        // className="h-screen  
        // * bg-[url('https://www.pescar.org.ar/wp-content/uploads/2021/10/Home-slider1.jpg')] 
        // * bg-cover bg-no-repeat bg-center"
        >
            <section>
                <div className="text-center px-4 py-6 mt-5 bg-white max-w-4xl text-black rounded-3xl shadow-2xl xl:w-fit w-[80%] mx-auto">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">¿Sabías Que...?</h2>
                    <p className="md:text-lg">Esta noche nos acompañan emprendimientos de Egresados de la Fundación.
                    Son productos y servicios únicos, desde llaveros y pines hasta un deslumbrante glitter bar. Apoya a estos talentosos emprendedores y su creatividad en acción.</p>
                    <p className="md:text-lg">Te invitamos a conocerlos.</p>
                </div>
                <div className="container mx-auto px-4 pb-4">
                    {/* Emprendimiento 4 */}
                    <div className="flex flex-wrap items-center mt-8 mb-10">
                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full" style={{
                                backgroundImage: `url(${imagen4})`,
                                backgroundSize: "cover", // Ajusta el tamaño de la imagen al div
                                backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            }}>
                            </div>
                            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full" style={{
                                backgroundImage: `url(${imagen5})`,
                                backgroundSize: "cover", // Ajusta el tamaño de la imagen al div
                                backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            }}>
                            </div>
                            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full" style={{
                                backgroundImage: `url(${imagen6})`,
                                backgroundSize: "cover", // Ajusta el tamaño de la imagen al div
                                backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            }}>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal text-gray-100">
                            by_lasfridas
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-100">
                            Somos apasionadas a realzar la belleza natural de cada persona. Nuestro objetivo principal es ayudar a nuestros clientes a sentirse y verse mejor a través de una variedad de servicios y productos relacionados con el maquillaje y la belleza.
                            </p>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div className="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                <img
                                    alt="..."
                                    src={logo4}
                                    className="w-full align-middle rounded-t-lg"
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
                                            className="text-pink-600 fill-current"
                                        ></polygon>
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        Contactate
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        <div>
                                            Instagram:
                                            <br />
                                            <a href="https://www.instagram.com/by_lasfridas/" target="_blank" rel="noopener noreferrer" className=" text-blue-600 font-bold">
                                                Ingresa a nuestro IG
                                            </a>
                                        </div>
                                        <div>
                                            Correo:
                                            <br />
                                                Somoslasfridasok@gmail.com
                                        </div>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    {/* Emprendimiento 1 */}
                    <div className="flex flex-wrap items-center mt-8">
                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full" style={{
                                backgroundImage: `url(${imagen1})`,
                                backgroundSize: "cover", // Ajusta el tamaño de la imagen al div
                                backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            }}>
                                <i className="fas fa-user-friends text-xl"></i>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal text-gray-100">
                                Bunker 3D
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-100">
                                Nos dedicamos al diseño y fabricación de dijes únicos y personalizados que permiten a sus clientes expresar su estilo y creatividad en cada detalle.
                            </p>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div className="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded-lg" style={{
                                backgroundColor: "#874b53",
                            }}>
                                <img
                                    alt="..."
                                    src={logo1}
                                    className="w-full align-middle rounded-t-lg "
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
                                            className="text-pink-600 fill-current" style={{
                                                color: "#874b53",
                                            }}
                                        ></polygon>
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        Contactate
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        <div>
                                            Correo:
                                            <br />
                                            <span className="italic">bunker3d.ad@gmail.com</span>
                                        </div>
                                        <div>
                                            Instagram:
                                            <br />
                                            <a href="https://instagram.com/bunker3d.ad?utm_source=qr&igshid=OGU0MmVlOWVjOQ==" target="_blank" rel="noopener noreferrer" className=" text-blue-600 font-bold">
                                                Ingresa a nuestro IG
                                            </a>
                                        </div>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    {/* Emprendimiento 2 */}
                    <div className="flex flex-wrap items-center mt-8">
                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full" style={{
                                backgroundImage: `url(${imagen2})`,
                                backgroundSize: "cover", // Ajusta el tamaño de la imagen al div
                                backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            }}>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal text-gray-100">
                                Luxe3D
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-100">
                                Emprendimiento especializado en la creación de dijes exclusivos que permiten a sus clientes expresar su individualidad y estilo personal a través de diseños significativos y únicos.
                            </p>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div className="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded-lg bg-orange-400 ">
                                <img
                                    alt="..."
                                    src={logo2}
                                    className="w-full align-middle rounded-t-lg"
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
                                        Contactate
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        <div>
                                            Instagram:
                                            <br />
                                            <a href="https://instagram.com/luxe3d?igshid=NjIwNzIyMDk2Mg==" target="_blank" rel="noopener noreferrer" className=" text-blue-600 font-bold">
                                                Ingresa a nuestro IG
                                            </a>
                                        </div>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    {/* Emprendimiento 3 */}
                    <div className="flex flex-wrap items-center mt-8 mb-10">
                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full" style={{
                                backgroundImage: `url(${imagen3})`,
                                backgroundSize: "cover", // Ajusta el tamaño de la imagen al div
                                backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            }}>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal text-gray-100">
                                Neoretro3d
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-100">
                                Neoretro3d se especializa en la confección artesanal de dijes a medida que reflejan la singularidad de cada cliente. Cada pieza es una obra maestra única, diseñada para expresar estilo y creatividad en su forma más auténtica.
                            </p>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div className="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                <img
                                    alt="..."
                                    src={logo3}
                                    className="w-full align-middle rounded-t-lg"
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
                                            className="text-pink-600 fill-current"
                                        ></polygon>
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        Contactate
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        <div>
                                            Instagram:
                                            <br />
                                            <a href="https://instagram.com/neoretro3d?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className=" text-blue-600 font-bold">
                                                Ingresa a nuestro IG
                                            </a>
                                        </div>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    {/* Emprendimiento 5 */}
                    <div className="flex flex-wrap items-center mt-8 mb-10">
                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full" style={{
                                backgroundImage: `url(${imagen7})`,
                                backgroundSize: "cover", // Ajusta el tamaño de la imagen al div
                                backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            }}>
                            </div>
                            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full" style={{
                                backgroundImage: `url(${imagen8})`,
                                backgroundSize: "cover", // Ajusta el tamaño de la imagen al div
                                backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            }}>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal text-gray-100">
                                JukTech
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-100">
                            Somos JukTech, un pequeño equipo de desarrolladores dedicados a brindar soluciones tecnológicas y la creación de páginas web a nuestros clientes. Buscamos crear soluciones a medida de las necesidades de nuestros solicitantes, orientándonos hacia la practicidad y eficiencia.
                            </p>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div className="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                <img
                                    alt="..."
                                    src={logo5}
                                    className="w-full align-middle rounded-t-lg"
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
                                            className="text-pink-600 fill-current"
                                        ></polygon>
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        Contactate
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        <div>
                                            <p>
                                                maximiliano.a.dorado@gmail.com
                                            </p>
                                            <p>
                                                brianpumarica@gmail.com
                                            </p>
                                        </div>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Emprendimientos;
