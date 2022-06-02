'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Tasks', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Tasks', 'deletedAt');
  }
};