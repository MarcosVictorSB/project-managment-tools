'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TypeTasks', [
      {
        name: 'Erro',
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        name: 'Melhoria',
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        name: 'Nova Funcionalidade',
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('TypeTasks', null, {});
  }
};
