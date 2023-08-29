import { useState, useEffect } from "react";
import axios from "axios";
import ModalEditUsuario from "../shared/ModalEditUsuario";

function User() {
    const [usuarios, setUsuarios] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    const dbHost = process.env.REACT_APP_DB_HOST || "174.25.0.2";
    const dbUser = process.env.REACT_APP_DB_USER || "admin";
    const dbName = process.env.REACT_APP_DB_NAME || "db";

    useEffect(() => {
        const config = {
            params: {
                server: dbHost,
                username: dbUser,
                db: dbName,
            },
        };
        axios
            .get(backendURL, config)
            .then((res) => setUsuarios(res.data))
            .catch((err) => console.log(err));
    }, [backendURL, dbHost, dbUser, dbName]); // Incluye las variables en el array de dependencias

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleEdit = (id) => {
        setEditingId(id);
        setModalIsOpen(true);
    };    

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="xl:w-3/4  border-spacing-2 rounded-2xl border border-y-neutral-950 items-center">
                    <div className="flex flex-1 flex-col justify-center">
                        <div className="text-center relative bg-white rounded-lg shadow-md flex flex-col p-4">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Datos Personales</h2>
                            <ul role="list" className="divide-y divide-gray-100">
                                {usuarios.map((usuario) => (
                                    <li key={editingId === usuario.id ? `editing-${usuario.id}` : usuario.id} className="flex justify-between gap-x-6 py-5">
                                        <div className="flex min-w-0 gap-x-4">
                                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                            <div className="min-w-0 flex-auto">
                                                {
                                                    usuario.nombreapellido ?
                                                        <p className="text-sm truncate leading-6">
                                                            <span>Nombre:
                                                            </span> {usuario.nombreapellido}
                                                        </p> :
                                                        <p className="text-sm leading-6 text-gray-500">Ingrese su nombre</p>
                                                }
                                                {
                                                    <p className="mt-1 truncate text-xs leading-5">
                                                        <span style={{ color: usuario.habilitado ? 'green' : 'red' }}>Estado: {usuario.habilitado ? ' Habilitado' : 'No habilitado'}</span>

                                                    </p>
                                                }

                                            </div>
                                        </div>

                                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                            {
                                                usuario.empresa ?
                                                    <p className="text-sm truncate leading-6">
                                                        <span>
                                                            Empresa:
                                                        </span> {usuario.empresa}
                                                    </p>
                                                    :
                                                    <p className="text-sm leading-6 text-gray-500">
                                                        Ingrese una empresa
                                                    </p>
                                            }

                                            {
                                                <p className="text-sm truncate leading-6">
                                                    <span>Comida: </span>{usuario.comida}
                                                </p>
                                            }
                                            {
                                                usuario.telefono ?
                                                    <p className="text-sm truncate leading-6">
                                                        <span>Telefono:
                                                        </span> {usuario.telefono}
                                                    </p> :
                                                    <p className="text-sm leading-6 text-gray-500">Ingrese su telefono</p>
                                            }
                                        </div>
                                        <div className="flex min-w-0 gap-x-4">
                                            {
                                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleEdit(usuario.id)}>Editar</button>
                                            }
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ModalEditUsuario isOpen={modalIsOpen} id={editingId} setModalIsOpen={setModalIsOpen} />
        </div>
    );
}

export default User;
