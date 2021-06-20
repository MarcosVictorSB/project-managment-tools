const Service = require('./Service')
const database = require('../models')

class ServiceVersion extends Service {
   constructor(){
      super('Version')
   }
}

module.exports = ServiceVersion