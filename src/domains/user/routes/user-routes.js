const Router = require('express')
const factory = require('../factories')
const controller = factory.getUserController();

const routes = Router()
  routes
    .post('/usuarios/', (...args) => controller.create(...args))

module.exports = routes