const Router = require('express')
const TasksController = require('../controllers/TasksController')

const routes = Router()

routes
  .get('/tasks',TasksController.getAllTask)
  .post('/tasks/criar', TasksController.createNewTask)
  .get('/tasks/:id', TasksController.getOneTask)
  .delete('/tasks/:id', TasksController.deleteTask)
  .put('/tasks/:id', TasksController.updateTask)

module.exports = routes