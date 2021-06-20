'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'marcos@marcos.com',
        password: '123456',
        name: 'Marcos',
        is_active: true,
        typeuser_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'victor@victor.com',
        password: '123456',
        name: 'Victor',
        is_active: true,
        typeuser_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'pietro@pietro.com',
        password: '123456',
        name: 'Pietro',
        is_active: true,
        typeuser_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
