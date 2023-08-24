import axios from 'axios'
import { useState } from "react";

export default function RegisterForm() {
    const backendURL = process.env.REACT_APP_BACKEND_URL;

    const [values, setValues] = useState({
        nombreapellido: '',
        telefono: '',
        numeroinvitados: '',
        empresa: '',
        comida: 'Sin restricciones',
        user: '',
        password: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        axios.post(`${backendURL}/register`, values)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <div
            className="min-h-screen 
            * bg-[url('https://www.pescar.org.ar/wp-content/uploads/2021/10/Home-slider1.jpg')] 
            * bg-cover bg-no-repeat bg-center"
        >
            <div className="flex min-h-full flex-1 flex-col justify-center px-20 py-12 lg:px-96">
                <div className="text-center relative bg-white rounded-lg shadow-md flex flex-col items-center p-8 justify-center">

                    <form onSubmit={handleSubmit} className="grid grid-cols-1  gap-x-8 gap-y-6">
                        <div className="space-y-6">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Registrar nuevo usuario</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600 sm:max-w-md">
                                    El registro de usuario es para personas/entidades que han comprado una mesa o cubierto para la ceremonia.
                                </p>
                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <label htmlFor="nombreapellido" className="block text-sm font-medium leading-6 text-gray-900">
                                            Nombre y apellido
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="nombreapellido"
                                                    id="nombreapellido"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Ingrese nombre y apellido"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
                                            Teléfono
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="telefono"
                                                    id="telefono"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Ingrese el teléfono"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="comida" className="block text-sm font-medium leading-6 text-gray-900">
                                            Comida
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="comida"
                                                name="comida"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="Sin restricciones" defaultValue>Sin restricciones</option>
                                                <option value="vegetariano">Vegetariano</option>
                                                <option value="vegano">Vegano</option>                                    <option value="celiaco">Celiaco</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="numeroinvitados" className="block text-sm font-medium leading-6 text-gray-900">
                                            Número de invitados
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="number"
                                                    name="numeroinvitados"
                                                    id="numeroinvitados"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Ingrese el número de invitados"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="empresa" className="block text-sm font-medium leading-6 text-gray-900">
                                            Empresa
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="empresa"
                                                    id="empresa"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Ingrese la empresa"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                                            Datos de usuario único
                                        </h2>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                                            Nombre de usuario
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="user"
                                                    id="user"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Ingrese el nombre de usuario"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Contraseña
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Ingrese la contraseña"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="sm:col-span-4">
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="comments" className="font-medium text-gray-900">
                                        Comments
                                    </label>
                                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                </div>
                            </div>
                        </div> */}
                                </div>
                            </div>
                            <div className="mt-6 ">
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                    mb-5"
                                >
                                    Registrar Usuario
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
