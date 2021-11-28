const express = require('express')
const routes = require('./routes')
const path = require('path')

const app = express()


// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, './app/views'))


routes(app)



module.exports = app