const mongoose = require('mongoose')
const db = process.env.DB
const conexionDB = async ()=>{
    try {
        mongoose.connect(db)
        console.log("Conexión con la base de datos exitosa")
    }
    catch(e){
        console.log("Error al conectar la base de datos", e)
    }
}
module.exports = conexionDB