const UserController = require('../controllers/user-controller')
const UserRepository = require('../repositories/user-repository')
const UserService = require('../services/user-service')

const getUserRepository = () => {
  const nameModel = 'Users'
  const repository = new UserRepository({ nameModel })
  return repository;
}

const getUserService = () => {
  const repository = getUserRepository();
  const service = new UserService({repository})
  return service;
}

const getUserController = () => {
  const userService = getUserService()
  const controller = new UserController({userService})
  return controller;
}

module.exports = {
  getUserRepository,
  getUserService,
  getUserController
}