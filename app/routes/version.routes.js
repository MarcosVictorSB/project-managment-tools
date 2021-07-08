 const Router = require('express')
 const VersionController = require('../controllers/VersionController')

 const routes = Router()

 routes
   .get('/versao',VersionController.getAllVersions)
   .post('/versao/criar', VersionController.createNewVersion)
   .get('/versao/:id', VersionController.getOneVersion)
   .delete('/versao/:id', VersionController.deleteVersion)
   .put('/versao/:id', VersionController.updateVersion)

module.exports = routes