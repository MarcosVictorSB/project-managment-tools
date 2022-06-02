const Router = require('express')
const TypeUserController = require('../controllers/TypeUserController')
const auth = require('../middleware/auth') 
 
const routes = Router()

routes
  .get('/tipos-usuarios', auth, TypeUserController.getAll)
  .post('/tipos-usuarios/', auth, TypeUserController.create)
  .get('/tipos-usuarios/:id', auth, TypeUserController.getTypeUserById)
  .delete('/tipos-usuarios/:id', auth, TypeUserController.delete)
  .put('/tipos-usuarios/:id', auth, TypeUserController.update)

module.exports = routes