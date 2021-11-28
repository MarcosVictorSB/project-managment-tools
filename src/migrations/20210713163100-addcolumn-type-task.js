'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('TypeTasks', 'deletedAt', {
      type: Sequelize.DATE,
      allowNull: true
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('TypeTasks', 'deletedAt');
  }
};