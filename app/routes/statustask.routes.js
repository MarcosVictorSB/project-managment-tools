 const Router = require('express')
 const StatusTaskController = require('../controllers/StatusTaskController.js')

 const routes = Router()

 routes
   .get('/status-tarefa', StatusTaskController.getAllStatusTask)
   .post('/status-tarefa/criar', StatusTaskController.createNewStatusTask)
   .get('/status-tarefa/:id', StatusTaskController.getOneStatusTask)
   .delete('/status-tarefa/:id', StatusTaskController.deleteStatusTask)
   .put('/status-tarefa/:id', StatusTaskController.updateStatusTask)

module.exports = routes