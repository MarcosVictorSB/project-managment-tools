'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeUser extends Model {
    static associate(models) {
      TypeUser.hasOne(models.Users, {
        foreignKey: 'id_typeuser'
      })
    }
  };
  TypeUser.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'TypeUser',
  });
  return TypeUser;
}; 