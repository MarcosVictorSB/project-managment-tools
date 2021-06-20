const bodyParser = require('body-parser')
const project = require('./projects.routes')
const typeUsers = require('./typeusers.routes')


module.exports = app => {
   app.use(
      bodyParser.json(),
      bodyParser.urlencoded({ extended: false }),
      project,
      typeUsers
   )
}

