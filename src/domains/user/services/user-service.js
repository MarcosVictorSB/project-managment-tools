const UserRepository = require('../repositories/user-repository')
const { conflict, created, serverError, notFound, OK } = require('../../../protocols/http');
const enumHelperUser = require('../../../helpers/enumHelperUser');
const generateHashPassword = require('../utils/generateHash');


class UserService {
  constructor(params = {}){
    this.repository = params.repository || new UserRepository();
    this.generateHashPassword = params.generateHashPassword || generateHashPassword
  }

  async create(params) {
    try {
      const user = await this.repository.getUserBy(params.email); 
      if(user){
        return conflict(enumHelperUser.user.alreadyExists)
      }

      const newUser = {
        name: params.name,
        email: params.email,
        password: await this.generateHashPassword(params.password)
      }

      const userCreated = await this.repository.create(newUser);
      if(!userCreated){
        return conflict(enumHelperUser.user.errorToCreatedUser);
      }

      return created(userCreated);
    } catch (error) {
      return serverError(error.message)
    }
  }

  async getById(id){
    try {
      const response = await this.repository.getById(id); 
      if(!response){
        return notFound(enumHelperUser.user.notFoundUser)
      }

      return OK(response)
    } catch (error) {
      return serverError(error.message)
    }
    
  }
}

module.exports = UserService