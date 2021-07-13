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
    name: DataTypes.STRING,
    identification: DataTypes.STRING,
    description: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Project',
  });
  return Project;
};