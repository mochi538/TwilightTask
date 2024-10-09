const express = require('express')
const tareaRouteController = require('../controller/tareasControlle')
const router = express.Router()

router.get('/tarea', tareaRouteController.getTask)
router.post('/tarea', tareaRouteController.postTask)
router.put('/tarea/:id', tareaRouteController.updateTask)
router.delete('/tarea/:id', tareaRouteController.deleteTask)




module.exports = router
