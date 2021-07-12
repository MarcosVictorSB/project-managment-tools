'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TypeUsers', [
      {
        name: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      name: 'Desenvolvedor',
      createdAt: new Date(),
      updatedAt: new Date()
   },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TypeUsers', null, {});
  }
};
