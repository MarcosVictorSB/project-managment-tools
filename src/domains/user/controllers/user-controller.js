const bcrypt = require('bcryptjs')
const UserService = require('../services/user-service')
const { created } = require('../../../protocols/http')

class UserController {  
  constructor(params = {}) {
    this.userService = params.userService || new UserService();
  }

  async create(req, res){      
    try {
      const { name, email, password } = req.body
      const params = {
        name,
        email,
        password
      }
      const response = await this.userService.create(params)         
      return res.status(response.status).json(response.body) ;
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }

  createHash(password){
    var salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }

}


module.exports = UserController