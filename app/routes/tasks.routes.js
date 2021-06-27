 const Router = require('express')
 const TasksController = require('../controllers/TasksController')

 const routes = Router()

 routes
   .get('/tasks',TasksController.getAllRegistries)
   .post('/tasks/criar', TasksController.createRegistry)
   .get('/tasks/:id', TasksController.getOneRegistry)
   .delete('/tasks/:id', TasksController.deleteRegistry)
   .put('/tasks/:id', TasksController.updateRegistry)

module.exports = routes