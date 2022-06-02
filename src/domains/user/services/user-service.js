const UserRepository = require('../repositories/user-repository')
const { conflict } = require('../../../protocols/http')


class UserService {
  constructor(params = {}){
    this.repository = params.repository || new UserRepository();
  }
  async create(params) {
    try {
      const user = await this.getUserBy(params.email);
      if(user){
        return conflict('Usuario já existe')
      }
      const result = await this.repository.create(user);
      return result;
    } catch (error) {
      return error
    }
  }

  async getUserBy(emall){
    try {
      const user = await this.repository.getUserBy(emall);
      return user;
    } catch (error) {
      return error
    }
  }
}

module.exports = UserService