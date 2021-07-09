'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeUser extends Model {
    static associate(models) {
      TypeUser.belongsTo(models.Users)
    }
  };
  TypeUser.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TypeUser',
  });
  return TypeUser;
};