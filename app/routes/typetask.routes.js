 const Router = require('express')
 const TypeTaskController = require('../controllers/TypeTaskController.js')

 const routes = Router()

 routes
   .get('/tipo-tarefa',TypeTaskController.getAllTypeTask)
   .post('/tipo-tarefa/criar', TypeTaskController.createNewTypeTask)
   .get('/tipo-tarefa/:id', TypeTaskController.getOneTypeTask)
   .delete('/tipo-tarefa/:id', TypeTaskController.deleteTypeTask)
   .put('/tipo-tarefa/:id', TypeTaskController.updateTypeTask)

module.exports = routes