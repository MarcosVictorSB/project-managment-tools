 const Router = require('express')
 const StatusTaskController = require('../controllers/StatusTaskController.js')
 const auth = require('../middleware/auth')

 const routes = Router()

 routes
   .get('/status-tarefa', auth, StatusTaskController.getAllStatusTask)
   .post('/status-tarefa/', auth, StatusTaskController.createNewStatusTask)
   .get('/status-tarefa/:id', auth, StatusTaskController.getOneStatusTask)
   .delete('/status-tarefa/:id', auth, StatusTaskController.deleteStatusTask)
   .put('/status-tarefa/:id', auth, StatusTaskController.updateStatusTask)

module.exports = routes