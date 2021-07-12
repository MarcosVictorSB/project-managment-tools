 const Router = require('express')
 const UserController = require('../controllers/UserController')
 const auth = require('../middleware/auth')

 const routes = Router()

 routes
   .get('/usuarios', auth, UserController.getAllUser)
   .post('/usuarios/criar',auth,  UserController.createNewUser)
   .get('/usuarios/:id', auth, UserController.getOneUser)
   .delete('/usuarios/:id', auth, UserController.deleteUser)
   .put('/usuarios/:id', auth, UserController.updateUser)

module.exports = routes