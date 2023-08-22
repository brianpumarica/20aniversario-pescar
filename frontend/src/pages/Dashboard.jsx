import axios from "axios";
import Invitados from "../components/people/Invitados";
import User from "../components/people/User";
import { useEffect, useState } from "react";
import UnauthenticatedContent from "../components/auth/UnauthenticatedContent";

function Dashboard() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const backendURL = process.env.REACT_APP_BACKEND_URL;

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
      .then(err => console.log(err));
  }, [])

  return (
    <div className="App">
      {
        auth ?
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
          :
          <div>
            <UnauthenticatedContent message={message} />
          </div>
      }

    </div>
  );
}

export default Dashboard;