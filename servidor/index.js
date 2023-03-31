const express = require('express');

//creo servidor
const app = express();

//defino ruta principal
app.get('/',(req, res) => {
    res.send('funcionando')
});

app.listen(4000, () => {
    console.log('servidor corriendo en 4000');
});