const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    /* Contenido de la tarea */
    contenido: {
        type: String,
        required: true
    },
    /* Estado de la tarea (Completada, no completada) */
    estado: {
        type: Boolean,
        
        required: true
    },
    /* Fecha en la que se creó la tarea */
    fechaCreacion: { 
        type: Date,
        required:true
    }
})

const Tarea = mongoose.model('Tareas', schema)

module.exports = Tarea