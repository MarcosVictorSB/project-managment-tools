const express = require('express')
const routes = require('./routes')
const path = require('path')
const logger = require('./helpers/logger');

const app = express()
app.use(logger)


routes(app)

module.exports = app