const Router = require('express')
const ProjectController = require('../controllers/ProjectController.js')
const auth = require('../middleware/auth')

const router = Router()
router
   .get('/projetos', auth, ProjectController.getAllProjects)  
 

module.exports = router