const IService = require('./Service')

class ServiceStatusTask extends IService {
   constructor(){
      super('StatusTasks')
   }
}

module.exports = ServiceStatusTask