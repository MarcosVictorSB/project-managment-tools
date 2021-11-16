 const Router = require('express')
const UsersController = require('../controllers/UserController')
 const UserController = require('../controllers/UserController')
 const auth = require('../middleware/auth')

 const routes = Router()

 routes
   .get('/usuarios', auth, UserController.getUserActive)
   .get('/usuarios/', auth, UserController.getAll)
   .post('/usuarios/',auth,  UserController.create)
   .get('/usuarios/:id', auth, UserController.getUserById)
   .delete('/usuarios/:id', auth, UserController.delete)
   .put('/usuarios/:id', auth, UserController.update)

module.exports = routes