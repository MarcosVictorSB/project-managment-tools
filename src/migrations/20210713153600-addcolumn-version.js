'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Versions', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Versions', 'deletedAt');
  }
};