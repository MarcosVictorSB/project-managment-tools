 const Router = require('express')
 const VersionController = require('../controllers/VersionController')

 const routes = Router()

 routes
   .get('/version',VersionController.getAllRegistries)
   .post('/version/criar', VersionController.createRegistry)
   .get('/version/:id', VersionController.getOneRegistry)
   .delete('/version/:id', VersionController.deleteRegistry)
   .put('/version/:id', VersionController.updateRegistry)

module.exports = routes