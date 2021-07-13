const database = require('../models')

class Service {
   constructor(nameModel){
      this.nameModel = nameModel
   }

   async getAllRegistries(where = {}){
      console.log('dentro do serviço padrão.')
      return database[this.nameModel].findAll({ where: { ...where} })
   }

   async getOneRegistry(id){
      return database[this.nameModel].findOne({ where: { id: id} })
   }

   async createRegistry(datas){
      return database[this.nameModel].create(datas)
   }

   async updateRegistry(updateDatas, id){
      return database[this.nameModel].update(updateDatas, { where: { id: id} })
   }

   async deleteRegistry(id){
      return database[this.nameModel].destroy({where : {id: Number(id)}})
   }
}

module.exports = Service