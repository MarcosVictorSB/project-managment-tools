const Router = require('express')
const factory = require('../factories')
const controller = factory.getUserController();

const routes = Router()
  routes
    .post('/users/', (...args) => controller.create(...args))
    .get('/users/:id', (...args) => controller.getById(...args))
    .get('/users/', (...args) => controller.getAllUser(...args))
    .put('/users/:id', (...args) => controller.update(...args))
    .delete('/users/:id', (...args) => controller.delete(...args))

module.exports = routes