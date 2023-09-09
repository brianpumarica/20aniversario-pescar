import { useState, useEffect } from 'react';
import imagenPescar from '../../assets/pescarLogo.jpg';
function MemoryTest() {
  const [intentos, setIntentos] = useState(0);
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [contadorCartasIguales, setContadorCartasIguales] = useState(0);

  useEffect(() => {
    const importImages = require.context('./imagenes', false, /\.(png|jpe?g|svg)$/);

    // Obtiene la lista de nombres de archivo de las imágenes
    const imageFileNames = importImages.keys();

    // Carga las imágenes en un arreglo de objetos con las rutas de las imágenes
    const images = imageFileNames.slice(0, 8).map((fileName) => {
      return {
        src: importImages(fileName),
        id: fileName.replace('./', ''),
        isFlipped: false,
      };
    });

    // Duplica las imágenes para tener pares
    const duplicatedImages = [...images, ...images];
    const updatedDuplicatedImages = duplicatedImages.map((image, index) => {
      return {
        ...image,
        id: `${image.id}_${index}`, // Agrega un sufijo único a los identificadores duplicados
      };
    });
    // Baraja aleatoriamente las imágenes
    const shuffledImages = shuffleArray(updatedDuplicatedImages);

    // Establece el estado inicial del juego con las imágenes barajadas
    setImgs(shuffledImages);
    setIntentos(0);

  }, []);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  
  function handleCardClick(card, index) {
    console.log(intentos)
    if (cartasSeleccionadas.length === 2 || card === null || card.isFlipped) {
      return;
    }
    const updatedImgs = [...imgs];
    updatedImgs[index].isFlipped = true;

    // Agrega la carta seleccionada al estado de las cartas seleccionadas
    const cartasSeleccionadasActual = [...cartasSeleccionadas];
    cartasSeleccionadasActual.push(card);

    setCartasSeleccionadas(cartasSeleccionadasActual);
    // Incrementa el número de intentos
    setIntentos(intentos + 1);
    
    function sonCartasIguales() {
      if (cartasSeleccionadasActual.length === 2) {
        const carta1 = cartasSeleccionadasActual[0];
        const carta2 = cartasSeleccionadasActual[1];
        // Verifica si ambos objetos tienen las propiedades 'id' antes de comparar
        const idCarta1 = carta1.id.substring(0, 8);
        const idCarta2 = carta2.id.substring(0, 8);
  
        return idCarta1 === idCarta2;
  
      }
      return false;
    }

    function reiniciarJuego() {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    if (cartasSeleccionadasActual.length === 2) {
      const carta1 = cartasSeleccionadasActual[0];
      const carta2 = cartasSeleccionadasActual[1];

      if (sonCartasIguales()) {
        setCartasSeleccionadas([]);
        setContadorCartasIguales(contadorCartasIguales + 1);
        console.log('contador iguales',contadorCartasIguales);
        if (contadorCartasIguales === 7) {
          alert(`¡Has ganado en ${intentos} intentos! ¡Vuelve a jugar!`);
          reiniciarJuego();
        }
      } else {
        setTimeout(() => {
          const flippedBackImgs = updatedImgs.map((image) => {
            if (image.id === carta1.id || image.id === carta2.id) {
              return { ...image, isFlipped: false };
            } else {
              return image;
            }
          });

          // Actualiza el estado con las cartas volteadas nuevamente
          setImgs(flippedBackImgs);

          // Luego, limpia las cartas seleccionadas
          setCartasSeleccionadas([]);
        }, 800); 
      }
    }
  }


  


  return (

    <div className="grid grid-cols-4 gap-4 mx-4 sm:mx-36">
      {imgs.map((image,index) => (
        <li 
          key={index} 
          name={image.id} 
          onClick={() => handleCardClick(image, index)}>

          <div className='flex justify-center'>
            {image.isFlipped ? (
              <div className='bg-cover bg-center'>
                <img className="object-cover" src={image.src} alt={`Carta ${image.id}`} />
              </div>
            ) : (
              <div className='flex justify-center'>
              <div className='bg-cover bg-center'>
                <img className="object-cover" src={imagenPescar} alt="Reverso de la carta" />
              </div>
              </div>
            )}
          </div>
        </li>
      ))}
    </div>

  );
}


export default MemoryTest;

