const mongoose = require('mongoose');
const producto_schema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    categoria:{
        type:String,
        required:true
    },
    ubicacion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    fecha_creacion:{
        type:Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Producto',producto_schema);