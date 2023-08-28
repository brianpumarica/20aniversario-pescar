import { useState, useEffect } from "react";
import axios from "axios";

function Invitados() {
    const [invitados, setInvitados] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedValues, setEditedValues] = useState({});

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
            .get(`${backendURL}/invitados`, config)
            .then((res) => setInvitados(res.data))
            .catch((err) => console.log(err));
    }, [backendURL, dbHost, dbUser, dbName]);

    const handleEdit = (id) => {
        setEditingId(id);
        const invitadoToEdit = invitados.find((invitado) => invitado.id === id);
        setEditedValues({
            nombreapellido: invitadoToEdit.nombreapellido,
            comida: invitadoToEdit.comida,
            empresa: invitadoToEdit.empresa,
            habilitado: invitadoToEdit.habilitado,
        });
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setEditedValues((prevValues) => ({
            ...prevValues,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSave = (id) => {
        axios
            .put(`${backendURL}/invitados/${id}`, {
                id: id,
                nombre: editedValues.nombreapellido,
                comida: editedValues.comida,
                habilitado: editedValues.habilitado,
            })
            .then((response) => {
                if (response.data.success) {
                    setInvitados((prevInvitados) =>
                        prevInvitados.map((invitado) =>
                            invitado.id === id ? { ...invitado, ...editedValues } : invitado
                        )
                    );
                    setEditingId(null);
                    window.location.reload(); // Recargar la página
                }
            })
            .catch((error) => {
                console.error("Error al actualizar usuario:", error);
            });
    };

    return (
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
                                            {editingId === invitado.id ? (
                                                <input
                                                    type="text"
                                                    name="nombreapellido"
                                                    placeholder="Nombre y apellido"
                                                    value={editedValues.nombreapellido}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                invitado.nombreapellido ? 
                                                <p className="text-sm truncate leading-6">
                                                    <span>Nombre: 
                                                    </span> {invitado.nombreapellido}
                                                </p> : 
                                                <p className="text-sm leading-6 text-gray-500">Ingrese un nombre</p>
                                            )}
                                            {editingId === invitado.id ? (
                                                <input
                                                    type="checkbox"
                                                    name="habilitado"
                                                    checked={editedValues.habilitado}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                    <span style={{ color: invitado.habilitado ? 'green' : 'red' }}>{invitado.habilitado ? ' Estado: Habilitado' : 'Estado: No habilitado'}</span>

                                                </p>
                                            )}

                                        </div>
                                    </div>

                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        {editingId === invitado.id ? (
                                            <input
                                                type="text"
                                                name="empresa"
                                                placeholder="Empresa"
                                                value={editedValues.empresa}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            invitado.empresa ? 
                                            <p className="text-sm truncate leading-6">
                                                <span className="text-sm">
                                                    Empresa: 
                                                    </span>{invitado.empresa}
                                                </p> 
                                                : 
                                                <p className="text-sm leading-6 text-gray-500">
                                                    Ingrese una empresa
                                                </p>
                                        )}

                                        {editingId === invitado.id ? (
                                            <select
                                                name="comida"
                                                value={editedValues.comida}
                                                onChange={handleInputChange}
                                            >
                                                <option value="Sin restricciones" defaultValue>Sin restricciones</option>
                                                <option value="vegetariano">Vegetariano</option>
                                                <option value="vegano">Vegano</option>
                                            </select>
                                        ) : (
                                            <p className="text-sm truncate leading-6">
                                                <span>Comida: </span>{invitado.comida}
                                            </p>
                                        )}

                                    </div>
                                    <div className="flex min-w-0 gap-x-4">
                                        {editingId === invitado.id ? (
                                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleSave(invitado.id)}>Guardar</button>
                                        ) : (
                                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleEdit(invitado.id)}>Editar</button>
                                        )}
                                    </div>
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invitados;
