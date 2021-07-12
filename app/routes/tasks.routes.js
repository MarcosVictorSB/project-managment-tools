const Router = require('express')
const TasksController = require('../controllers/TasksController')
const auth = require('../middleware/auth')

const routes = Router()

routes
  .get('/tasks', auth, TasksController.getAllTask)
  .post('/tasks/criar', auth, TasksController.createNewTask)
  .get('/tasks/:id', auth, TasksController.getOneTask)
  .delete('/tasks/:id', auth, TasksController.deleteTask)
  .put('/tasks/:id', auth, TasksController.updateTask)

module.exports = routes