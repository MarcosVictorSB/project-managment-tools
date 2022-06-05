const Router = require('express')
const factory = require('../factories')
const controller = factory.getUserController();

const routes = Router()
  routes
    .post('/users/', (...args) => controller.create(...args))
    .get('/users/:id', (...args) => controller.getById(...args))

module.exports = routes