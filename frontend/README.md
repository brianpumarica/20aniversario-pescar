# Poke-Quiz!

¿Cuánto sabes de Pokémon? App de preguntas y respuestas de opción multiple, creada con REACT y usando TAILWIND para darle estilo.

# Pasos para la creación de la app:

1. Vamos a usar el framework de VITE, por lo que empezamos instalando: 
$npm create vite
Usaremos React con JavaScript.

2. Usaremos Tailwind, por lo que instalamos desde la consola:
Todo el proceso y los pasos, estan en la documentación: https://tailwindcss.com/docs/guides/vite
$npm install -D tailindcss postcss autoprefixer

3. Necesitaremos usar Router Dom, por lo que usaremos el comando:
$npm install react-router-dom

4. Configuramos las rutas del archivo tailwind.config.js:
    Reemplazamos todo lo que ya estaba, por la siguiente configuración (según la documentacion de tw):

    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

5. Agregamos las directivas de TW al css.
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

6. Recordar detener el servidor (si ya esta corriendo) con ctrl + c, y volver a iniciarlo con npm run dev, para que tome los estilos de tailwind.