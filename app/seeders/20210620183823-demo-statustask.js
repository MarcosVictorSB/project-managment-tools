'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('StatusTasks', [
      {
        name: 'Backlog',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'To-do',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Desenvolvimento',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Teste',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Feito',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StatusTasks', null, {});
  }
};
