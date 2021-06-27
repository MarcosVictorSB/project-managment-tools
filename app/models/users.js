'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasOne(models.TypeUser)
      Users.hasOne(models.Tasks, {
        foreignKey: 'id_user' 
      })
      // Users.belongsToMany(models.Project, {
      //   through: 'Users_Projects',
      //   foreignKey: 'id_users'
      //  })
    }
  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};