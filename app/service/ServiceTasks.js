const Service = require('./Service')
const database = require('../models')

class ServiceTasks extends Service {
   constructor(){
      super('Tasks')
   }
}

module.exports = ServiceTasks