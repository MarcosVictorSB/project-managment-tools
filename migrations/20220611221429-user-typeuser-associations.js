'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Users', {
      fields: ['id_typeuser'],
      type: 'foreign key',
      name: 'user_typeuser_association',
      references: {
        table: 'TypeUsers',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Users', {
      fields: ['id_typeuser'],
      type: 'foreign key',
      name: 'user_typeuser_association',
      references: {
        table: 'TypeUsers',
        field: 'id'
      }
    })
  }
};
