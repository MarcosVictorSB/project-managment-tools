const IService = require('./Service')

class ServiceProject extends IService {
   constructor(){
      super('Project')
   }
}

module.exports = ServiceProject