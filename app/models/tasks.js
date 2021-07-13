'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    
    static associate(models) {

    }
  };
  Tasks.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Tasks',
  });
  return Tasks;
};