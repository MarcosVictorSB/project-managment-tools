const database = require('../../models')
class IRepository {
  constructor(nameModel) {
    this.nameModel = nameModel;
  }

  async create(params){
    try {
      return await database[this.nameModel].create(params)
    } catch (error) {
      return error.message
    }
  }

  async getById(id){
    try {
      return await database[this.nameModel].findOne({ where: { id: id }})
    } catch (error) {
      return error.message
    }
  }

  async update(id, params){
    try {
      return await database[this.nameModel].update(params, { where: { id: id} })
    } catch (error) {
      return error.message
    }
  }

  async delete(id){
    try {
      return await database[this.nameModel].destroy({where : {id: id }})
    } catch (error) {
      return error.message
    }
  }
}

module.exports = IRepository