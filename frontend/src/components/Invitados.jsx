import React, { useState, useEffect } from "react";
import axios from "axios";

function Invitados() {
    const [invitados, setInvitados] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedValues, setEditedValues] = useState({});
    const url = "http://localhost:8081";

    useEffect(() => {
        const config = {
            params: {
                server: "174.25.0.3",
                username: "admin",
                db: "db",
            },
        };
        axios
            .get(`${url}/invitados`, config)
            .then((res) => setInvitados(res.data))
            .catch((err) => console.log(err));
    }, []);

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
            .put(`${url}/invitados/${id}`, {
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
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Comida</th>
                        <th>Empresa</th>
                        <th>Habilitado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {invitados.map((invitado) => (
                        <tr key={editingId === invitado.id ? `editing-${invitado.id}` : invitado.id}>
                            <td>{invitado.id}</td>
                            <td>
                                {editingId === invitado.id ? (
                                    <input
                                        type="text"
                                        name="nombreapellido"
                                        placeholder="Nombre y apellido"
                                        value={editedValues.nombreapellido}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    invitado.nombreapellido ? invitado.nombreapellido : "Ingrese un nombre"
                                )}
                            </td>
                            <td>
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
                                    invitado.comida 
                                )}
                            </td>
                            <td>
                                {editingId === invitado.id ? (
                                    <input
                                        type="text"
                                        name="empresa"
                                        placeholder="Empresa"
                                        value={editedValues.empresa}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    invitado.empresa ? invitado.empresa : "Ingrese una empresa en tus datos personales"
                                )}
                            </td>
                            <td>
                                {editingId === invitado.id ? (
                                    <input
                                        type="checkbox"
                                        name="habilitado"
                                        checked={editedValues.habilitado}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    invitado.habilitado.toString()
                                )}
                            </td>
                            <td>
                                {editingId === invitado.id ? (
                                    <button onClick={() => handleSave(invitado.id)}>Guardar</button>
                                ) : (
                                    <button onClick={() => handleEdit(invitado.id)}>Editar</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Invitados;
