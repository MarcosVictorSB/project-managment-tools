const Service = require('./Service')
const database = require('../models')

class ServiceTypeUser extends Service {
   constructor(){ 
      super('TypeUsers')
   }
}

module.exports = ServiceTypeUser