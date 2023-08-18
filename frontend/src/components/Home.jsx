import Invitados from "./Invitados";
import User from "./User";

function Home() {
  return (
    <div className="App">
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