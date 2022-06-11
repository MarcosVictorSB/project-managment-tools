const bcrypt = require('bcryptjs')
const UserService = require('../services/user-service')
const { serverError } = require('../../../protocols/http');

class UserController {  
  constructor(params = {}) {
    this.userService = params.userService || new UserService();
  }

  async create(request, response){      
    try {
      const { name, email, password } = request.body
      const params = {
        name,
        email,
        password
      }
      const result = await this.userService.create(params)         
      return response.status(result.status).json(result.body)
        
    } catch (error) {
      return serverError(error.message)
    }
  }

  createHash(password){
    var salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }

  async getById(request, response){
    try {
      const { id } = request.params
      const result = await this.userService.getById(id)
      return response.status(result.status).json(result.body)
    } catch (error) {
      return serverError(error.message)
    }
  }

  async getAllUser(request, response) {
    try {
      const result = await this.userService.getAllUser()
      return response.status(result.status).json(result)
    } catch (error) {
      return serverError(error.message)
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params
      const params = request.body;

      const result = await this.userService.update(id, params)
      
      return response.status(result.status).json(result)
    } catch (error) {
      return serverError(error.message)
    }
  }

}


module.exports = UserController