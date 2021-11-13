
require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { dbConnection } = require('./database/config')


const app = express();

//configurar CORS
app.use(cors());
app.use(express.json());

//base de datos
dbConnection();

app.use(express.static('public'));

//rutas
app.use( '/api/alumnos', require('./routes/alumnos') );


app.listen( 3200 , () => {
    console.log('Seridor corriendo en el puerto '+ 3200);
})