const IService = require('./Service')

class ServiceTypeTask extends IService {
   constructor(){
      super('TypeTasks') 
   }
}

module.exports = ServiceTypeTask