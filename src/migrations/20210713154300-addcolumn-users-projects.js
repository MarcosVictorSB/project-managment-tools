'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users_Projects', 'deleteAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users_Projects', 'deleteAt');
  }
};