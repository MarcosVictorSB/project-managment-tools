'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tasks.hasOne(models.Project)
      Tasks.hasOne(models.Users)
      Tasks.hasOne(models.StatusTasks)
      Tasks.hasOne(models.Version)
    }
  };
  Tasks.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};