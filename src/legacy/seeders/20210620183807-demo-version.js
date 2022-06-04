'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Versions', [
      {
        name: 'versão 0.0.1',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'versão 0.0.2',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'versão 0.0.3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Versions', null, {});
  }
};
