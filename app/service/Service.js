const database = require('../models')

class IService {
   constructor(nameModel){
      this.nameModel = nameModel
   }

   async getAll(where = {}){
      return database[this.nameModel].findAll({ where: { ...where} })
   }

   async getById(id){
      return database[this.nameModel].findOne({ where: { id: id} })
   }

   async create(datas){
      return database[this.nameModel].create(datas)
   }

   async update(updateDatas, id){
      return database[this.nameModel].update(updateDatas, { where: { id: id} })
   }

   async delete(id){
      return database[this.nameModel].destroy({where : {id: Number(id)}})
   }
}

module.exports = IService