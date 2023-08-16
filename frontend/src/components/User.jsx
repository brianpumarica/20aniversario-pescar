import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
    const [usuarios, setUsuarios] = useState([]);
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
            .get(url, config)
            .then((res) => setUsuarios(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleEdit = (id) => {
        setEditingId(id);
        const userToEdit = usuarios.find((user) => user.id === id);
        setEditedValues({
            nombreapellido: userToEdit.nombreapellido,
            telefono: userToEdit.telefono,
            comida: userToEdit.comida,
            empresa: userToEdit.empresa,
            habilitado: userToEdit.habilitado,
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
            .put(`${url}/user/${id}`, {
                id: id,
                nombre: editedValues.nombreapellido,
                telefono: editedValues.telefono,
                comida: editedValues.comida,
                habilitado: editedValues.habilitado,
            })
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    setUsuarios((prevUsers) =>
                        prevUsers.map((user) =>
                            user.id === id ? { ...user, ...editedValues } : user
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
                        <th>Nombre y apellido</th>
                        <th>Telefono</th>
                        <th>Comida</th>
                        <th>Empresa</th>
                        <th>Habilitado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={editingId === usuario.id ? `editing-${usuario.id}` : usuario.id}>
                            <td>{usuario.id}</td>
                            <td>
                                {editingId === usuario.id ? (
                                    <input
                                        type="text"
                                        name="nombreapellido"
                                        value={editedValues.nombreapellido}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    usuario.nombreapellido
                                )}
                            </td>
                            <td>
                                {editingId === usuario.id ? (
                                    <input
                                        type="text"
                                        name="telefono"
                                        value={editedValues.telefono}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    usuario.telefono
                                )}
                            </td>
                            <td>
                                {editingId === usuario.id ? (
                                    <input
                                        type="text"
                                        name="comida"
                                        value={editedValues.comida}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    usuario.comida
                                )}
                            </td>
                            <td>
                                {editingId === usuario.id ? (
                                    <input
                                        type="text"
                                        name="empresa"
                                        value={editedValues.empresa}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    usuario.empresa
                                )}
                            </td>
                            <td>
                                {editingId === usuario.id ? (
                                    <input
                                        type="checkbox"
                                        name="habilitado"
                                        checked={editedValues.habilitado}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    usuario.habilitado.toString()
                                )}
                            </td>
                            <td>
                                {editingId === usuario.id ? (
                                    <button onClick={() => handleSave(usuario.id)}>Guardar</button>
                                ) : (
                                    <button onClick={() => handleEdit(usuario.id)}>Editar</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default User;
