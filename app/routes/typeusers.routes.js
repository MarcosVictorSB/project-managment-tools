const Router = require('express')
const TypeUserController = require('../controllers/TypeUserController')
const auth = require('../middleware/auth') 
 
const routes = Router()

routes
  .get('/tipos-usuarios', auth, TypeUserController.getAllTypeUsers)
  .post('/tipos-usuarios/criar', auth, TypeUserController.createNewTypeUser)
  .get('/tipos-usuarios/:id', auth, TypeUserController.getOneTypeUser)
  .delete('/tipos-usuarios/:id', auth, TypeUserController.deleteTypeUser)
  .put('/tipos-usuarios/:id', auth, TypeUserController.updateTypeUser)

module.exports = routes