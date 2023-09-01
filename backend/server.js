const express = require("express");
const cors = require("cors");
const mariadb = require("mariadb");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config(); // Carga las variables de entorno desde .env
const salt = 10;

const FRONTEND_URL = process.env.FRONTEND_URL;
const app = express();
app.use(
  cors({
    origin: [FRONTEND_URL],
    methods: ["GET", "POST", "PUT"], // Aquí incluyes los métodos que tu aplicación utiliza
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const dbHost = process.env.DB_HOST || "174.25.0.3";
const dbUser = process.env.DB_USER || "admin";
const dbPassword = process.env.DB_PASSWORD || "admin";
const dbName = process.env.DB_NAME || "db";

const db = mariadb.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});
const jwtSecretKey = process.env.JWT_SECRET_KEY;

app.get('/', (req, res) => {
  res.send("Hello World from Docker NodeJS App")
})

app.get("/user", async (req, res) => {
  let conn;
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, jwtSecretKey);
  const userId = decodedToken.id; // Acceder al ID del usuario desde el token decodificado
    try {
    conn = await db.getConnection();
    const sql = `SELECT * FROM usuarios WHERE id = ${userId}`;
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

app.get("/invitadoActual", async (req, res) => {
  let conn;
  const id = req.query.id;
    try {
    conn = await db.getConnection();
    const sql = `SELECT * FROM invitados WHERE id = ${id}`;
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
// Ruta para actualizar un usuario por su ID
app.put("/user/:id", async (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const telefono = req.body.telefono;
  const empresa = req.body.empresa;
  const comida = req.body.comida;
  const habilitado = req.body.habilitado;

  let conn;
  try {
    conn = await db.getConnection();
    const sql =
      "UPDATE usuarios SET nombreapellido = ?, telefono = ?, empresa = ?, comida = ?, habilitado = ?  WHERE id = ?";
    const result = await conn.query(sql, [
      nombre,
      telefono,
      empresa,
      comida,
      habilitado,
      id,
    ]);

    //console.log(result); // Imprime los resultados en la consola
    res.json({ success: true, message: "Usuario actualizado con éxito" });
  } catch (err) {
    console.error("Error dentro del servidor:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  } finally {
    if (conn) {
      conn.release(); // Liberar la conexión al grupo
    }
  }
});
app.get("/invitados", async (req, res) => {
  let conn;
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, jwtSecretKey);
  const userId = decodedToken.id; // Acceder al ID del usuario desde el token decodificado
  try {
    conn = await db.getConnection();
    const sql = `SELECT * FROM invitados WHERE idReferenciado = ${userId}`;
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
app.put("/invitados/:id", async (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const comida = req.body.comida;
  const habilitado = req.body.habilitado;
  const empresa = req.body.empresa;

  let conn;
  try {
    conn = await db.getConnection();
    const sql =
      "UPDATE invitados SET nombreapellido = ?, empresa = ?,comida = ?, habilitado = ? WHERE id = ?";
    const result = await conn.query(sql, [nombre, empresa, comida, habilitado, id]);

    //console.log(result); // Imprime los resultados en la consola
    res.json({ success: true, message: "Invitado actualizado con éxito" });
  } catch (err) {
    console.error("Error dentro del servidor:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  } finally {
    if (conn) {
      conn.release(); // Liberar la conexión al grupo
    }
  }
});

//POST ==>> Register
app.post("/register", async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password.toString(), salt);

    const userValues = [
      req.body.user,
      hash,
      req.body.nombreapellido,
      req.body.telefono,
      req.body.empresa,
      req.body.comida,
    ];
    const userSql =
      "INSERT INTO usuarios (user, password, nombreapellido, telefono, empresa, comida) VALUES (?, ?, ?, ?, ?, ?)";

    const userResult = await db.query(userSql, userValues);
    const userId = userResult.insertId;
    const invitadosNumber = req.body.numeroinvitados;
    const invitadosInsertSql =
      "INSERT INTO invitados (idReferenciado) VALUES (?)";

    for (let i = 0; i < invitadosNumber; i++) {
      await db.query(invitadosInsertSql, [userId]);
    }

    return res.json({ Status: "Success" });
  } catch (error) {
    console.error("An error occurred:", error);
    return res.json({ Error: "An error occurred on the server" });
  }
});

//POST ==>> login
app.post("/login", async (req, res) => {
  try {
    const sql = "SELECT id, user, password, rol FROM usuarios WHERE user = ?";
    const data = await db.query(sql, [req.body.user]);

    if (data.length > 0) {
      const passwordMatched = await bcrypt.compare(
        req.body.password.toString(),
        data[0].password
      );
      if (passwordMatched) {
        const id = data[0].id;
        const rol = data[0].rol;
        const token = jwt.sign({ id, rol }, jwtSecretKey, {
          expiresIn: "1d",
        });
        res.cookie("token", token,{ 
          secure: true, // Solo se enviará la cookie en conexiones HTTPS
          maxAge: 24 * 60 * 60 * 1000, // Tiempo de expiración de la cookie
        });
        return res.json({ Status: "Success" });
      } else {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }
    } else {
      return res.status(401).json({ message: "Usuario no existe" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
});

const verifyUser = (req, res, next) =>{
  const token = req.cookies.token;
  if(!token){
    return res.status(401).json({ message: "No estas autenticado." });
  }
  else{
    jwt.verify(token, jwtSecretKey, (err,decoded)=>{
      if(err){
        res.status(401).json({ message: "Token no es correcto." });
      }
      else{
        req.id = decoded.id;
        req.rol = decoded.rol;
        next();
      }
    })
  }
}

app.get('/verify',verifyUser, (req,res)=>{
  return res.json({Status:"Success",id:req.id, rol:req.rol})
})
app.post("/saveId", (req, res) => {
  try {
    const idFromClient = req.body.id;
    id = idFromClient;

    return res.json({ Status: "Id saved successfully" });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(401).json({ message: "Error guardando ID en el server." });;
  }
});
app.get('/logout', (req,res)=>{
  res.clearCookie('token');
  return res.json({Status:"Success"});
})


const port = process.env.PORT || 8082; // Puerto en el que se ejecutará la aplicación

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
