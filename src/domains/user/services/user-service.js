const UserRepository = require('../repositories/user-repository')
const { conflict, created, serverError } = require('../../../protocols/http');
const enumsHelpesUser = require('../../../helpers/enumsHelpersUser');
const { use } = require('chai');


class UserService {
  constructor(params = {}){
    this.repository = params.repository || new UserRepository();
  }
  async create(params) {
    try {
      const user = await this.repository.getUserBy(params.email); 
      if(user){
        return conflict(enumsHelpesUser.user.alreadyExists)
      }

      const newUser = {
        name: params.name,
        email: params.email,
        password: params.password
      }
      const userCreated = await this.repository.create(newUser);
      if(!userCreated){
        return conflict(enumsHelpesUser.user.errorToCreatedUser);
      }

      return created(userCreated);
    } catch (error) {
      return serverError(error.message)
    }
  }
}

module.exports = UserService