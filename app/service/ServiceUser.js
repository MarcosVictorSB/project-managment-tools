const Service = require('./Service')
const database = require('../models')

class ServiceUser extends Service {
   constructor(){
      super('Users')
   }

   async existThisUserByEmail(email){
      return database[this.nameModel].findAll({ where: { email: email }})
   }

   isEmpty(obj){
      return Object.keys(obj).length === 0 && obj.constructor === Object
   }
}

module.exports = ServiceUser