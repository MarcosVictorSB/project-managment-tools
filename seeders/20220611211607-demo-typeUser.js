'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TypeUsers', [
      {
        name: 'Administrator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Developer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TypeUsers', null, {});
  }
};
