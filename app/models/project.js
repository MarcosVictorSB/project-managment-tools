'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsToMany(models.User, {
        through: 'UserProject'
      }),
      Project.hasMany(models.Task, {
        foreignKey: 'id_task'
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
    modelName: 'Project',
  });
  return Project;
};