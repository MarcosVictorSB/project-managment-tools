'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('UserProject', [
     {
        id_project: 1,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_project: 1,
        id_user: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }

  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserProject', null, {});
  }
};
