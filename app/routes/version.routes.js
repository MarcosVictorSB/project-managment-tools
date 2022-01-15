 const Router = require('express')
 const VersionController = require('../controllers/VersionController')
 const auth = require('../middleware/auth')

 const routes = Router()

 routes
   .get('/versao', auth, VersionController.getAll)
   .post('/versao/', auth, VersionController.create)
   .get('/versao/:id', auth, VersionController.getVersionById)
   .delete('/versao/:id', auth, VersionController.delete)
   .put('/versao/:id', auth, VersionController.update)

module.exports = routes