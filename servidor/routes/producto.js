const express = require('express');
const router = express.Router();
const producto_controler = require('../controlers/producto_controler');


//api
router.post('/',producto_controler.crear_producto);

module.exports = router;