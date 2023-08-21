import axios from "axios";
import Invitados from "./Invitados";
import User from "./User";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get(`${backendURL}/verify`)
      .then(res => {
        console.log(res.data.id);
        if (res.data.Status === "Success") {
          setAuth(true)
          setName(res.data.id)
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
      .then(err => console.log(err));
  }, [])

  return (
    <div className="App">
      {
        auth ?
          <div>
            funciona {name}
          </div>
          :
          <div>
            no func {message}
            logeate
            <Link to="/login">Login</Link>
          </div>
      }
      <header>
        <div>

          <h1 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Datos Personales</h1>
          <User></User>
        </div>
        <div>
          <h1 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Mis Invitados</h1>
          <Invitados></Invitados>
        </div>
      </header>
    </div>
  );
}

export default Home;