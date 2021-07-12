 const Router = require('express')
 const VersionController = require('../controllers/VersionController')
 const auth = require('../middleware/auth')

 const routes = Router()

 routes
   .get('/versao', auth, VersionController.getAllVersions)
   .post('/versao/criar', auth, VersionController.createNewVersion)
   .get('/versao/:id', auth, VersionController.getOneVersion)
   .delete('/versao/:id', auth, VersionController.deleteVersion)
   .put('/versao/:id', auth, VersionController.updateVersion)

module.exports = routes