const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});

const uri = process.env.DB_MONGO;
const conectar_db = async () => {
    try{
        await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('conectado a la base');
    }catch(error){
        console.log('no vale ' + error);
        process.exit(1);
    }
};
module.exports = conectar_db;