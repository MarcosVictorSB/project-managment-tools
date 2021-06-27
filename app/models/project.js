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
      Project.hasOne(models.Tasks, {
        foreignKey: 'id_project'
      })
      // Project.belongsToMany(models.Users, {
      //   through: 'Users_Projects',
      //   foreignKey: 'id_projects'
      //  })
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