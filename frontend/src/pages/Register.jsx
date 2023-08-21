import axios from 'axios'
import { useState } from "react";

export const Register = () => {
    const backendURL = process.env.REACT_APP_BACKEND_URL;

    const [values, setValues] = useState({
        nombreapellido: '',
        telefono: '',
        listaInvitados: '',
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
        <div>
            <div>
                <h2>Registrar nuevo usuario</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombreapellido"><strong>Nombre y apellido</strong></label>
                        <input type="text" placeholder='Ingrese nombre y apellido' name='nombreapellido' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="telefono"><strong>Teléfono</strong></label>
                        <input type="text" placeholder='Ingrese el teléfono' name='telefono' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="listaInvitados"><strong>Lista de Invitados</strong></label>
                        <input type="number" placeholder='Ingrese la lista de invitados' name='listaInvitados' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="empresa"><strong>Empresa</strong></label>
                        <input type="text" placeholder='Ingrese la empresa' name='empresa' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="comida"><strong>Comida</strong></label>
                        <select name="comida" onChange={handleChange}>
                            <option value="Sin restricciones" defaultValue>Sin restricciones</option>
                            <option value="vegetariano">Vegetariano</option>
                            <option value="vegano">Vegano</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="user"><strong>Nombre de usuario</strong></label>
                        <input type="text" placeholder='Ingrese el nombre de usuario' name='user' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password"><strong>Contraseña</strong></label>
                        <input type="password" placeholder='Ingrese la contraseña' name='password' onChange={handleChange} />
                    </div>
                    <button type='submit'>
                        Registrar Usuario
                    </button>
                </form>
            </div>
        </div>
    );
}
