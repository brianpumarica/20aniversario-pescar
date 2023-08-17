import Invitados from "./Invitados";
import User from "./User";

function Home() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>Datos Personales</h1>
          <User></User>
        </div>
        <div>
          <h1>Mis Invitados</h1>
          <Invitados></Invitados>
        </div>
      </header>
    </div>
  );
}

export default Home;