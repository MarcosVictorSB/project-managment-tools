const Router = require('express')
const ProjectController = require('../controllers/ProjectController.js')

const router = Router()
router
   .get('/projetos', ProjectController.getAllProjects) 


module.exports = router