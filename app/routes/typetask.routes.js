 const Router = require('express')
 const TypeTaskController = require('../controllers/TypeTaskController.js')

 const routes = Router()

 routes
   .get('/tipo-tarefa',TypeTaskController.getAllRegistries)
   .post('/tipo-tarefa/criar', TypeTaskController.createRegistry)
   .get('/tipo-tarefa/:id', TypeTaskController.getOneRegistry)
   .delete('/tipo-tarefa/:id', TypeTaskController.deleteRegistry)
   .put('/tipo-tarefa/:id', TypeTaskController.updateRegistry)

module.exports = routes