import { useState, useEffect } from 'react';
import axios from 'axios';

function AuthComponent({ backendURL }) {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get(`${backendURL}/verify`)
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true)
                } else {
                    setAuth(false)
                    setMessage(res.data.Error)
                }
                // Enviar res.data.id al backend
                axios.post(`${backendURL}/saveId`, { id: res.data.id })
                    .then(response => {
                        console.log(response.data); // Puedes manejar la respuesta del backend si es necesario
                    })
                    .catch(error => {
                        console.error("Error al enviar id al backend:", error);
                    });
            })
            .catch(err => console.log(err));
    }, [backendURL]);

    // Devolver auth y message como un objeto
    return { auth, message };
}

export default AuthComponent;
