const UserRepository = require('../repositories/user-repository')
const { conflict, created, serverError, notFound, OK, noContent } = require('../../../protocols/http');
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
      const user = await this.repository.getById(id); 
      if(!user){
        return notFound(enumHelperUser.user.notFoundUser)
      }

      return OK(user)
    } catch (error) {
      return serverError(error.message)
    }    
  }

  async getAllUser() {
    try {
      const users = await this.repository.getAllUser(); 
      if(!users){
        return notFound(enumHelperUser.user.notFoundUser)
      }

      return OK(users);
    } catch (error) {
      return serverError(error.message)
    }    
  }

  async update(id, params) {
    try {
      const { password } = params;
      if(password){
        const hash = await this.generateHashPassword(params.password)
        params.password = hash;
      }

      const user = await this.repository.update(id, params);

      if(!user){
        return noContent(enumHelperUser.user.notFoundUser)
      }

      return OK(enumHelperUser.user.updateUser)

    } catch (error) {
      return serverError(error.message)
    }
  }

  async delete(id) {
    try {

      const result = await this.repository.delete(id)
      if(!result){
        return noContent(enumHelperUser.user.notFoundUser)
      }

      console.log({ result })
      
      return OK(enumHelperUser.user.delete)
    } catch (error) {
      return serverError(error.message)
    }
  }
}

module.exports = UserService