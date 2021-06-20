const Service = require('./Service')
const database = require('../models')

class ServiceTypeTask extends Service {
   constructor(){
      super('TypeTasks')
   }
}

module.exports = ServiceTypeTask