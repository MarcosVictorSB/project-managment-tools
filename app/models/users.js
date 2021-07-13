'use strict';
const {
  Model 
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.TypeUser, {
        foreignKey: 'id_typeuser'
      })
      Users.hasOne(models.Tasks, {
        foreignKey: 'id_user' 
      })
    }
  }; 
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    defaultScope: {
      where: {is_active: true}
    },

    scopes: {
      allUsers: {where: {}}
    },

    modelName: 'Users',
  });
  return Users;
};