const UserRepository = require('../repositories/user-repository')
const { conflict } = require('../../../protocols/http');
const enumsHelpes = require('../../../helpers/enumsHelpers');


class UserService {
  constructor(params = {}){
    this.repository = params.repository || new UserRepository();
  }
  async create(params) {
    try {
      const user = await this.getUserBy(params.email);
      if(user){
        return conflict(enumsHelpes.user.alreadyExists)
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