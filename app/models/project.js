'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    
    static associate(models) {
      Project.hasOne(models.Tasks, {
        foreignKey: 'id_project'
      })
    }
  };
  Project.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          args: true,
          msg: 'O nome não pode está vazio'
        }
      }
    },
    identification: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          args: true,
          msg: 'O identificador não pode está vazio'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          args: true,
          msg: 'A descrição não pode está vazio'
        }
      }
    },
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Project',
  });
  return Project;
};