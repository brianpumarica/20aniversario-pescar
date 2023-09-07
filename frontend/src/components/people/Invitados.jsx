import { useState, useEffect } from "react";
import axios from "axios";
import ModalEditInvitado from "../shared/ModalEditInvitados";

function Invitados() {
    const [invitados, setInvitados] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [invitadoEditar, setInvitadoEditar] = useState({});
    const backendURL = process.env.REACT_APP_BACKEND_URL;

    
    useEffect(() => {
        axios
            .get(`${backendURL}/api/invitados`)
            .then((res) => setInvitados(res.data))
            .catch((err) => console.log(err));
    }, [backendURL]);

    const handleEdit = (invitado) => {
        setEditingId(invitado.id);
        setModalIsOpen(true);
        setInvitadoEditar(invitado);
    };

    return (
        <div>
        <div className="flex items-center justify-center">
            <div className="xl:w-3/4  border-spacing-2 rounded-2xl border border-y-neutral-950 items-center">
                <div className="flex flex-1 flex-col justify-center">
                    <div className="text-center relative bg-white rounded-lg shadow-md flex flex-col p-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Invitados</h2>
                        <ul role="list" className="divide-y divide-gray-100">
                            {invitados.map((invitado) => (
                                <li key={editingId === invitado.id ? `editing-${invitado.id}` : invitado.id} className="flex justify-between gap-x-6 py-5">
                                    <div className="flex min-w-0 gap-x-4">
                                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                        <div className="min-w-0 flex-auto">
                                            {
                                                invitado.nombreapellido ? 
                                                <p className="text-sm truncate leading-6">
                                                    <span>Nombre: 
                                                    </span> {invitado.nombreapellido}
                                                </p> : 
                                                <p className="text-sm leading-6 text-gray-500">Ingrese un nombre</p>
                                            }
                                            {
                                                <p className="mt-1 truncate text-xs leading-5">
                                                    <span style={{ color: invitado.habilitado ? 'green' : 'red' }}>Estado:  {invitado.habilitado ? ' Habilitado' : 'No habilitado'}</span>
                                                </p>
                                            }

                                        </div>
                                    </div>

                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        {
                                            invitado.empresa ? 
                                            <p className="text-sm truncate leading-6">
                                                <span>
                                                    Empresa:
                                                    </span> {invitado.empresa}
                                                </p> 
                                                : 
                                                <p className="text-sm leading-6 text-gray-500">
                                                    Ingrese una empresa
                                                </p>
                                        }

                                        {                                            <p className="text-sm truncate leading-6">
                                                <span>Comida: </span>{invitado.comida}
                                            </p>
                                        }

                                    </div>
                                    <div className="flex min-w-0 gap-x-4">
                                        {
                                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleEdit(invitado)}>Editar</button>
                                        }
                                    </div>
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <ModalEditInvitado isOpen={modalIsOpen} invitado={invitadoEditar} setModalIsOpen={setModalIsOpen} />
        </div>
    );
}

export default Invitados;
