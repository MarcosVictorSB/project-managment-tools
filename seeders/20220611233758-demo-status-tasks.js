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
        name: 'To-Do',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Planning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Development',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Waitng QA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Testing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Done',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StatusTasks', null, {});
  }
};
