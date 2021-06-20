'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.hasOne(models.Project, {
        foreignKey: 'id_project'
      }),
      Task.hasOne(models.StatusTask, {
        foreignKey: 'id_status_task' 
      }),
      Task.hasOne(models.Version, {
        foreignKey: 'id_version'
      }),
      Task.hasOne(models.TypeTask, {
        foreignKey: 'id_type_task'
      }),
      Task.hasOne(models.User, {
        foreignKey: 'id_user'
      })
    }
  };
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};