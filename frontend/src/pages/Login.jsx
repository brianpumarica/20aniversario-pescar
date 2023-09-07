import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import axios from 'axios'
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation

function Login({ auth, setAuth}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
            navigate('/dashboard');
        }
    }, [auth, navigate]);
    axios.defaults.withCredentials = true;
    let user = useRef()
    let password = useRef()
    const backendURL = "https://magicstream.ddns.net/api";

    async function handleSubmit(event) {
        event.preventDefault()

        let data = {
            [user.current.name]: user.current.value,
            [password.current.name]: password.current.value
        }
        try {
            await axios.post(`${backendURL}/api/login`, data);
            setAuth(true);
            Swal.fire({
                icon: 'success',
                text: '¡Usuario online!',
                timer: 1501, // Configura el tiempo en milisegundos
                timerProgressBar: true
            })
            navigate('/dashboard');

        } catch (error) {
            //console.log('Ocurrió un error', error);
            Swal.fire({
                icon: 'error',
                title: '¡Lo sentimos!',
                text: error.response.data.message,
                timer: 1500, // Configura el tiempo en milisegundos
                timerProgressBar: true
            }).then(() => {
                window.location.reload();
            });
        }
    }


    return (
        <div
            className="h-screen 
            * bg-[url('https://www.pescar.org.ar/wp-content/uploads/2021/10/Home-slider1.jpg')] 
            * bg-cover bg-no-repeat bg-center"
        >
            <div className="flex min-h-full flex-1 flex-col justify-center px-20 py-12 lg:px-96">
                <div className="text-center relative bg-white rounded-lg shadow-md flex flex-col items-center p-8 justify-center">

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2021/10/Home-Boceto-Pescar-2021-312x96-1.png?resize=312%2C96&ssl=1"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Ingresa a tu cuenta
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="text-left">
                                <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nombre de Usuario
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="user"
                                        name="user"
                                        type="text"
                                        autoComplete="user"
                                        required
                                        ref={user}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between text-left">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Contraseña
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        ref={password}
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Inicia Sesion
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            No tenes cuenta?{' '}
                            <a href="https://www.pescar.org.ar/contacto" target="_blank" rel="noopener noreferrer" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Contactate con nosotros
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

Login.propTypes = {
    auth: PropTypes.bool.isRequired,
    setAuth: PropTypes.func.isRequired,
};
export default Login;
