import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [invitados, setInvitados] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8081/invitados";
    const config = {
      params: {
        server: "174.25.0.3",
        username: "admin",
        db: "db",
      },
    };
    axios
      .get(url, config)
      .then((res) => setInvitados(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre y apellido</th>
              <th>Comida</th>
              <th>Empresa</th>
              <th>Habilitado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {invitados.map((invitado, index) => {
              return (
                <tr key={index}>
                  {/* <input type='text' placeholder='Escriba Nombre' value={user.nombreapellido} ></input> */}
                  {/* <input type='text' placeholder='Escriba Nombre' value={values.nombreapellido} onChange={e => setValues({...values, nombreapellido:e.target.value})}></input> */}

                  <td>{invitado.id}</td>
                  <td>{invitado.nombreapellido}</td>
                  <td>{invitado.comida}</td>
                  <td>{invitado.empresa}</td>
                  <td>{invitado.habilitado}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Home;
