const Router = require('express')

const router = Router()

router.
   get('/', (req, res) => {
      return res.status(200).json({message: "A aplicação está online"})
   }) 
 

module.exports = router
