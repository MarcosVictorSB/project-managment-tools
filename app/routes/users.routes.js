 const Router = require('express')
 const UserController = require('../controllers/UserController')

 const routes = Router()

 routes
   .get('/usuarios',UserController.getAllRegistries)
   .post('/usuarios/criar', UserController.createRegistry)
   .get('/usuarios/:id', UserController.getOneRegistry)
   .delete('/usuarios/:id', UserController.deleteRegistry)
   .put('/usuarios/:id', UserController.updateRegistry)

module.exports = routes