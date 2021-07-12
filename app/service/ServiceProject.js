const Service = require('./Service')
const database = require('../models')

class ServiceProject extends Service {
   constructor(){
      super('Project')
   }
}

module.exports = ServiceProject