const database = require('./../../../../models')

class UserRepository {
  constructor(params = {}){
    this.nameModel = params.nameModel ||'Users'
  }

  async create(user){
    try {
      return await database[this.nameModel].create(user)
    } catch (error) {
      return error.message
    }
    
  }

  async getUserBy(email){
    try {
      const user = await database[this.nameModel].findOne({ where: { email: email }})
      return user;
    } catch (error) {
      return error.message
    }
    
  }

  async getAllUserStatusActive(where = {}){
    try {
      return model[this.nameModel].findAll({ where: { ...where} })
    } catch (error) {
      return error;
    }
  }

  async getAllUser(where = {}){
    return model[this.nameModel].scope('allUsers').findAll()
  }

  async existThisUserByEmail(email){
    return model[this.nameModel].findAll({ where: { email: email }})
  }

  isEmpty(obj){
    return Object.keys(obj).length === 0 && obj.constructor === Object
  }
}

module.exports = UserRepository