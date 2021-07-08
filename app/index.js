const express = require('express')
const routes = require('./routes')
const path = require('path')

const app = express()
const port = 3000

// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, './app/views'))


routes(app)

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

module.exports = app