'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StatusTask.hasOne(models.Tasks,{
        foreignKey: 'id_status_task'
      })
    }
  };
  StatusTask.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'StatusTasks',
  });
  return StatusTask;
};