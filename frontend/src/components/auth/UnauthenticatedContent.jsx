import PropTypes from 'prop-types'; // Importa PropTypes

// UnauthenticatedContent.jsx
const UnauthenticatedContent = ({ message }) => {

    return (
        <div
            className="h-screen 
            * bg-[url('https://www.pescar.org.ar/wp-content/uploads/2021/10/Home-slider1.jpg')] 
            * bg-cover bg-no-repeat bg-center"
        >
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                
                <div className="text-center relative bg-white rounded-lg shadow-md flex flex-col items-center p-8 justify-center">
                    <p className="text-base font-semibold text-indigo-600">401</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{message}</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Necesitas Logearte.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="login" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Inicia Sesion</a>
                        <a href="/" className="text-sm font-semibold text-gray-900">Inicio<span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
            </main>
        </div>
    );
}
UnauthenticatedContent.propTypes = {
    message: PropTypes.string.isRequired, // Agrega la validación para 'message'
};
export default UnauthenticatedContent;
