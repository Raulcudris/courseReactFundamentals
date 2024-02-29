const  express  = require("express");
 require('dotenv').config();

//Crear el servidor en express
const app = express();

//Directorios
app.use( express.static('public'));

//Rutas
   app.use('/api/auth',require('./routes/auth'));
// TODO: CRUD // Eventos 


// Escuchar peticiones
app.listen( process.env.PORT , ()=>{
    console.log(`Corriendo en el puertos ${ process.env.PORT } `)
})

