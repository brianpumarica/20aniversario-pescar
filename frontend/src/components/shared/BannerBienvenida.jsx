const BannerBienvenida = () => {
    return (
        // <div className="flex-1 flex items-center mb-2">
        //   <div className="text-center mx-auto flex flex-col items-center space-y-2 gap-2">
        //     <h1 className="text-4xl font-semibold">¡Cumplimos 20 Años! 🥳</h1>
        //     <p className="font-light text-2xl mt-1">¡Bienvenido!</p>
        //   </div>
        // </div>
        <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto text-center">
                <h1 className="text-4xl font-semibold">CUMPLIMOS 20 AÑOS! 🥳</h1>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-100">
                    B I E N V E N I D O
                </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded-lg">

                    <blockquote className="relative p-4">
                        <h4 className="text-xl font-bold text-white">
                            ¿SABÍAS QUÉ?
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                            <div>
                                Esta página web fue desarrollada por <span className="italic">alumnos y egresados</span> de los Centros Pescar con orientación en Programación.
                            </div>
                            <a href="/#/estudiantes" rel="noopener noreferrer" className=" text-blue-300 font-bold">
                                CONOCELOS ACÁ
                            </a>
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default BannerBienvenida;
