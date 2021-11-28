const IService = require('./Service')

class ServiceVersion extends IService {
   constructor(){
      super('Version')
   }
}

module.exports = ServiceVersion