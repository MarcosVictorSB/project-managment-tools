const Service = require('./Service')
const database = require('../models')

class ServiceTypeUser extends Service {
   constructor(){ 
      super('TypeUser')
   }
}

module.exports = ServiceTypeUser