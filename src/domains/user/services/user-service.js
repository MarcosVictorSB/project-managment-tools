const UserRepository = require('../repositories/user-repository')
const { conflict, created } = require('../../../protocols/http');
const enumsHelpes = require('../../../helpers/enumsHelpers');


class UserService {
  constructor(params = {}){
    this.repository = params.repository || new UserRepository();
  }
  async create(params) {
    try {
      const user = await this.repository.getUserBy(params.email);
      if(user){
        return conflict(enumsHelpes.user.alreadyExists)
      }

      const newUser = {
        name: params.name,
        email: params.email,
        password: params.params

      }
      const userCreated = await this.repository.create(newUser);
      if(!userCreated){
        return conflict(enumsHelpes.user.errorToCreatedUser);
      }

      return created(userCreated);
    } catch (error) {
      return error
    }
  }
}

module.exports = UserService