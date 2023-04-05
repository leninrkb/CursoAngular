const express = require('express');
const conectar_db = require('./config/db');

//creo servidor
const app = express();

//conecto a la db
conectar_db();

//midware
app.use(express.json());

//defino ruta principal
app.use('/api/productos',require('./routes/producto'));

app.listen(4000, () => {
    console.log('servidor corriendo en http://localhost:4000/');
});