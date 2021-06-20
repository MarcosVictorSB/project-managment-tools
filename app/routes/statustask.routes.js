 const Router = require('express')
 const StatusTaskController = require('../controllers/StatusTaskController.js')

 const routes = Router()

 routes
   .get('/status-tarefa', StatusTaskController.getAllRegistries)
   .post('/status-tarefa/criar', StatusTaskController.createRegistry)
   .get('/status-tarefa/:id', StatusTaskController.getOneRegistry)
   .delete('/status-tarefa/:id', StatusTaskController.deleteRegistry)
   .put('/status-tarefa/:id', StatusTaskController.updateRegistry)

module.exports = routes