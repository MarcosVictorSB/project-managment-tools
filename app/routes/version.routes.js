 const Router = require('express')
 const VersionController = require('../controllers/VersionController')

 const routes = Router()

 routes
   .get('/versao',VersionController.getAllRegistries)
   .post('/versao/criar', VersionController.createRegistry)
   .get('/versao/:id', VersionController.getOneRegistry)
   .delete('/versao/:id', VersionController.deleteRegistry)
   .put('/versao/:id', VersionController.updateRegistry)

module.exports = routes