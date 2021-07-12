const Service = require('./Service')
const database = require('../models')

class ServiceStatusTask extends Service {
   constructor(){
      super('StatusTasks')
   }
}

module.exports = ServiceStatusTask