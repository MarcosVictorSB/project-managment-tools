'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Version extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Version.hasOne(models.Tasks,{
        foreignKey: 'id_version'
      })
    }
  };
  Version.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Version',
  });
  return Version;
};