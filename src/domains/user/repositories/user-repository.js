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

  async getById(id){
    try {
      const user = await database[this.nameModel].findOne({ where: { id: id }})
      return user;
    } catch (error) {
      return error.message
    }
  }

  async getAllUser(){
    try {
      const user = await database[this.nameModel].findAll()
      return user;
    } catch (error) {
      return error.message
    }
  }

  async update(params){
    try {
      const user = await database[this.nameModel].update(params, { where: { id: params.id} })
      return user;
    } catch (error) {
      return error.message
    }
  }
}

module.exports = UserRepository