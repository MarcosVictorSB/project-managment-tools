const database = require('./../../../../models')
const IRepository = require('../../../contracts/IRepository')

class UserRepository extends IRepository {
  constructor(params = {}){
    super('Users')
    this.nameModel = params.nameModel ||'Users'
  }

 async getUserBy(email){
    try {
      const user = await database[this.nameModel].findOne({ where: { email: email }})
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
}

module.exports = UserRepository