const express = require('express')
const routes = require('./routes')
const path = require('path')

const app = express()

routes(app)



module.exports = app