 const Router = require('express')
 const TypeUserController = require('../controllers/TypeUserController')

 const routes = Router()

 routes
   .get('/tipos-usuarios',TypeUserController.getAllRegistries)
   .post('/tipos-usuarios/criar', TypeUserController.createRegistry)
   .get('/tipos-usuarios/:id', TypeUserController.getOneRegistry)
   .delete('/tipos-usuarios/:id', TypeUserController.deleteRegistry)
   .put('/tipos-usuarios/:id', TypeUserController.updateRegistry)

module.exports = routes