const express = require('express');
const conectar_db = require('./db');

//creo servidor
const app = express();

//conecto a la db
conectar_db();

//defino ruta principal
app.get('/',(req, res) => {
    res.send('funcionando')
});

app.listen(4000, () => {
    console.log('servidor corriendo en 4000');
});