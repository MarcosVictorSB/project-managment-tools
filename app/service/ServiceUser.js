const Service = require('./Service')
const database = require('../models')

class ServiceUser extends Service {
   constructor(){
      super('Users')
   }

   async login(where = {}){
      return database[this.nameModel].findAll({where: { ... where} })
   }
}

module.exports = ServiceUser