const Service = require('./Service')
const database = require('../models')

class ServiceUser extends Service {
   constructor(){
      super('Users')
   }
}

module.exports = ServiceUser