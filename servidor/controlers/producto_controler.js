const Producto = require('../models/Producto');

exports.crear_producto = async (req, res) => {
    try {
        let producto;
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        res.status(500).send('ocurrio un error :(');
    }
};

exports.obtener_productos = async (req, res) => {
    try {
        let productos = await Producto.find();
        res.json(productos);
        res.send(productos);
    } catch (error) {
        res.status(500).send('ocurrio un error :(');
    }
};