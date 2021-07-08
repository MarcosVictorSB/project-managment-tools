const { ServiceUser } = require('../service')
const service = new ServiceUser()

class Login {
   
   static async login(req, res){
      try {
         const infosLogin = req.body
         const user = await service.login(infosLogin)
         return res.status(200).json(user)
      } catch (error) {
         return res.status(500).json(error)
      }
   }

}

module.exports = Login