const bcrypt = require('bcryptjs')
const UserService = require('../services/user-service')
const { created, serverError } = require('../../../protocols/http')

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
      return res.status(response.status).json(response.body)
        
    } catch (error) {
      return serverError(error.message)
    }
  }

  createHash(password){
    var salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }

  async getById(req, res){
    try {
      const { id } = req.params
      const response = await this.userService.getById(id)
      return res.status(response.status).json(response.body)
    } catch (error) {
      return serverError(error.message)
    }
  }

}


module.exports = UserController