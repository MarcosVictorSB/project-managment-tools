const IService = require('./Service')

class ServiceTypeUser extends IService {
   constructor(){ 
      super('TypeUser')
   }
}

module.exports = ServiceTypeUser