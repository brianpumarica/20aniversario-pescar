
import './estilos.css' ; // Ajusta la ruta según la ubicación real del archivo optimizado

  function MemoryTest() {
    return (
      <div className="body">
        <header>
          <img src="imagenes/favicon1.png" alt="pescar" />
          <h1>Memotest 20 Años Fundacion Pescar</h1>
          <a href='javascript:void(0)' id="iniciar">Reiniciar Juego</a>
        </header>
        <main>
          {/* Comenta o elimina la sección que no necesites */}
          {/* <div id="datos">
            <h2>Partida 1</h2>
            <span>Jugador 1 vs Jugador </span>
          </div> */}
          <ul></ul>
        </main>
       
      </div>
    );
  }
  
  
export default MemoryTest;