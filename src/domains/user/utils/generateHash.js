const bcrypt = require('bcryptjs')
const SALT_ROUNDS = 10;

const generateHashPassword = (password) => {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const hash = bcrypt.hashSync(password, salt)
  return hash;
}

module.exports = generateHashPassword