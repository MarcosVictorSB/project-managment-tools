const bodyParser = require('body-parser')
const project = require('./projects.routes')
const typeUsers = require('./typeusers.routes')
const user = require('./users.routes')
const typeTask = require('./typetask.routes')
const statusTask = require('./statustask.routes')
const version = require('./version.routes')


module.exports = app => {
   app.use(
      bodyParser.json(),
      bodyParser.urlencoded({ extended: false }),
      project,
      typeUsers,
      user,
      typeTask,
      statusTask,
      version
   )
}

