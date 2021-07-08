 const Router = require('express')
 const TypeUserController = require('../controllers/TypeUserController')

 const routes = Router()

 routes
   .get('/tipos-usuarios',TypeUserController.getAllTypeUsers)
   .post('/tipos-usuarios/criar', TypeUserController.createNewTypeUser)
   .get('/tipos-usuarios/:id', TypeUserController.getOneTypeUser)
   .delete('/tipos-usuarios/:id', TypeUserController.deleteTypeUser)
   .put('/tipos-usuarios/:id', TypeUserController.updateTypeUser)

module.exports = routes