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
      StatusTask.belongsTo(models.Task)
    }
  };
  StatusTask.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StatusTask',
  });
  return StatusTask;
};