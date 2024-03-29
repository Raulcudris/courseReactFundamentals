const  express  = require("express");
const { dbConnection } = require("./database/config");
const cors  = require("cors")
 require('dotenv').config();

//Crear el servidor en express
const app = express();

//Base de Datos
dbConnection();

//Cors
app.use(cors());

//Directorios publico
app.use( express.static('public'));

// Lectura y parseo del Body
app.use( express.json());

//Rutas
   app.use('/api/auth',require('./routes/auth'));
   app.use('/api/events',require('./routes/events'));

// TODO: CRUD // Eventos 
// Escuchar peticiones
app.listen( process.env.PORT , ()=>{
    console.log(`Corriendo en el puertos ${ process.env.PORT } `)
})

