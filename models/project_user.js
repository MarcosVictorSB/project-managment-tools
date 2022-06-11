'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Users.belongsToMany(models.Project, {
        through: Users_Projects,
        uniqueKey: 'id_user'
      })

      models.Project.belongsToMany(models.Users, {
        through: Users_Projects,
        uniqueKey: 'id_project'
      })
    }
  };
  Project_User.init({
  }, {
    sequelize,
    modelName: 'Project_User',
  });
  return Project_User;
};