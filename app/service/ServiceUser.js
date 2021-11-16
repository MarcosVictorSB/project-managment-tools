const IService = require('./Service')
const database = require('../models')

class ServiceUser extends IService {
   constructor(){
      super('Users')
   }

   async getAllUserStatusActive(where = {}){
      return database[this.nameModel].findAll({ where: { ...where} })
   }

   async getAllUser(where = {}){
      return database[this.nameModel].scope('allUsers').findAll()
   }

   async existThisUserByEmail(email){
      return database[this.nameModel].findAll({ where: { email: email }})
   }

   isEmpty(obj){
      return Object.keys(obj).length === 0 && obj.constructor === Object
   }
}

module.exports = ServiceUser