'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'marcos@marcos.com.br',
        password: '123123123',
        name: 'Marcos',
        is_active: 1,
        id_typeuser: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        email: 'victor@victor.com.br',
        password: '123123123',
        name: 'Victor',
        is_active: 1,
        id_typeuser: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        email: 'pietro@pietro.com.br',
        password: '123123123',
        name: 'Pietro',
        is_active: 1,
        id_typeuser: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
