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
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Formato de e-mail invalido. Exemplo de email válido: email@com.br'
        },
        notEmpty: {
          args: true,
          msg: 'O email não pode está vazio'
        }
      }
    },
    password: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          args: true,
          msg: 'O nome não pode está vazio'
        }
      }
    },
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid: true,
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