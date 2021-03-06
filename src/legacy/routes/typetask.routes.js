const Router = require('express')
const TypeTaskController = require('../controllers/TypeTaskController')
const auth = require('../middleware/auth') 

const routes = Router()

routes
  .get('/tipo-tarefa', auth, TypeTaskController.getAllTypeTask)
  .post('/tipo-tarefa/', auth, TypeTaskController.createNewTypeTask)
  .get('/tipo-tarefa/:id', auth, TypeTaskController.getOneTypeTask)
  .delete('/tipo-tarefa/:id', auth, TypeTaskController.deleteTypeTask)
  .put('/tipo-tarefa/:id', auth, TypeTaskController.updateTypeTask)

module.exports = routes