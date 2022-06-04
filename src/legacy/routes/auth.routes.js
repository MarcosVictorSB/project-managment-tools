const Router = require('express')
const AuthenticationController = require('../controllers/AuthenticationControllers')

const router = Router()

router.
   post('/authentication', AuthenticationController.authentication) 
 

module.exports = router

