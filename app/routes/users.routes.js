 const Router = require('express')
 const UserController = require('../controllers/UserController')

 const routes = Router()

 routes
   .get('/usuarios',UserController.getAllUser)
   .post('/usuarios/criar', UserController.createNewUser)
   .get('/usuarios/:id', UserController.getOneUser)
   .delete('/usuarios/:id', UserController.deleteUser)
   .put('/usuarios/:id', UserController.updateUser)

module.exports = routes