const express = require('express');
const cors = require('cors');
const mariadb = require('mariadb');

const app = express();
app.use(cors());
app.use(express.json())

const db= mariadb.createPool({
  host: "174.25.0.3", //174.25.0.3
  user: "admin",
  password: "admin",
  database: "db"
})

const id=5;
// Ruta raíz
app.get('/', async(req, res) => {
  let conn;
  try {
    conn = await db.getConnection();
    const sql = `SELECT * FROM usuarios WHERE id = ${id}`;
    const result = await conn.query(sql);
    //console.log(result); // Imprime los resultados en la consola
    res.json(result); // Devuelve los resultados como respuesta al cliente
  } catch (err) {
    console.error("Error inside server:", err);
    res.json({ Message: "Error inside server" });
  } finally {
    if (conn) {
      conn.release(); // Liberar la conexión al grupo
    }
  }

});
app.get('/invitados', async(req, res) => {
  let conn;
  try {
    conn = await db.getConnection();
    const sql = `SELECT * FROM invitados WHERE idReferenciado = ${id}`;
    const result = await conn.query(sql);
    res.json(result);
  } catch (err) {
    console.error("Error inside server:", err);
    res.json({ Message: "Error inside server" });
  } finally {
    if (conn) {
      conn.release(); // Liberar la conexión al grupo
    }
  }

});
// Ruta para actualizar un usuario por su ID
app.put('/user/:id', async (req, res) => {

  const id = req.body.id;
  const nombre = req.body.nombre;
  const telefono = req.body.telefono;
  const comida = req.body.comida;
  const habilitado = req.body.habilitado;

  let conn;
  try {
    conn = await db.getConnection();
    const sql = "UPDATE usuarios SET nombreapellido = ?, telefono = ?, comida = ?, habilitado = ? WHERE id = ?";
    const result = await conn.query(sql, [nombre, telefono, comida, habilitado, id]);

    console.log(result); // Imprime los resultados en la consola
    res.json({ success: true, message: 'Usuario actualizado con éxito' });

  } catch (err) {
    console.error("Error dentro del servidor:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  } finally {
    if (conn) {
      conn.release(); // Liberar la conexión al grupo
    }
  }
});

const port = process.env.PORT || 8081 // Puerto en el que se ejecutará la aplicación

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
