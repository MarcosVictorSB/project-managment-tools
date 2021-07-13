'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeTask extends Model {
    static associate(models) {
      
    }
  };
  TypeTask.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'TypeTasks',
  });
  return TypeTask;
};