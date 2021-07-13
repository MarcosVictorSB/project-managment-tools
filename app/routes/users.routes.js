 const Router = require('express')
const UsersController = require('../controllers/UserController')
 const UserController = require('../controllers/UserController')
 const auth = require('../middleware/auth')

 const routes = Router()

 routes
   .get('/usuarios', auth, UserController.getUserActive)
   .get('/usuarios/todos', auth, UserController.getAllUser)
   .post('/usuarios/criar',auth,  UserController.createNewUser)
   .get('/usuarios/:id', auth, UserController.getOneUser)
   .delete('/usuarios/:id', auth, UserController.deleteUser)
   .put('/usuarios/:id', auth, UserController.updateUser)

module.exports = routes