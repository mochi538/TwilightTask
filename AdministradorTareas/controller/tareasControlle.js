const  Tarea= require('../modules/tareasModel')

exports.getTask = async(req, res) => {
    try {
        const consulta = await Tarea.find()
        res.json({consulta})
    } catch (e) {
        return res.status(500).json({ mensaje: "Error desde el método getTask"})
    }
}

exports.postTask = async(req, res) => {
    try {
        const { contenido, estado} = req.body;
        let fechaCreacion = new Date()
        const newTask = new Tarea({contenido, estado, fechaCreacion} )
        await newTask.save();
        res.json({mensaje: newTask})
    } catch(e) {
        console.log(e)
        res.status(500).json({mensaje: "Error desde el método postTask"})
    }
}
exports.updateTask= async (req, res)=>{
    try{
        let {id}= req.params;
        let {contenido, estado}= req.body;
        if(!contenido || !estado){
            return res.json({msj:"Campos incompletos"})
        }else{
            let fechaCreacion = new Date()
            let uptTask = await Tarea.findByIdAndUpdate(id,{contenido, estado, fechaCreacion})
            if(!uptTask){
                res.json({mjs:"No id"})
            }else{
                res.json({mjs:"Tarea actualizado", uptTask})
            }
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({mjs:"Error desde el método updateTask"})
    }
}
exports.deleteTask= async(req, res)=>{
    try{
        let {id}= req.params;
        let consultaDelete = await Tarea.findByIdAndDelete(id)
        if(!consultaDelete){
            res.json({mjs:"No id"})
        }else{
            res.json({mjs:"Tarea eliminada correctamente"});
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({mjs:"Error desde el método deleteTask"})
    }
}
