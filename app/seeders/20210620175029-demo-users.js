'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'marcos@marcos.com.br',
        password: '$2a$10$B7WJJECR9ttzPRzyqhPORujxjUqGrc8HgRYb2XJqvdPLRo0FvZIB6',
        name: 'Marcos',
        is_active: 1,
        id_typeuser: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        email: 'victor@victor.com.br',
        password: '$2a$10$B7WJJECR9ttzPRzyqhPORujxjUqGrc8HgRYb2XJqvdPLRo0FvZIB6',
        name: 'Victor',
        is_active: 1,
        id_typeuser: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        email: 'pietro@pietro.com.br',
        password: '$2a$10$B7WJJECR9ttzPRzyqhPORujxjUqGrc8HgRYb2XJqvdPLRo0FvZIB6',
        name: 'Pietro',
        is_active: 1,
        id_typeuser: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'usuario@usuario.com.br',
        password: '$2a$10$B7WJJECR9ttzPRzyqhPORujxjUqGrc8HgRYb2XJqvdPLRo0FvZIB6',
        name: 'Usuario',
        is_active: 1,
        id_typeuser: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'luffy@one.piece.com.br',
        password: '$2a$10$B7WJJECR9ttzPRzyqhPORujxjUqGrc8HgRYb2XJqvdPLRo0FvZIB6',
        name: 'Luffy',
        is_active: 1,
        id_typeuser: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        email: 'rogerd@one.piece.com.br',
        password: '$2a$10$B7WJJECR9ttzPRzyqhPORujxjUqGrc8HgRYb2XJqvdPLRo0FvZIB6',
        name: 'Golde D Rogger',
        is_active: 0,
        id_typeuser: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        email: 'barbabranca@one.piece.com.br',
        password: '$2a$10$B7WJJECR9ttzPRzyqhPORujxjUqGrc8HgRYb2XJqvdPLRo0FvZIB6',
        name: 'Eduard New Gates',
        is_active: 0,
        id_typeuser: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        email: 'enel@one.piece.com.br',
        password: '$2a$10$B7WJJECR9ttzPRzyqhPORujxjUqGrc8HgRYb2XJqvdPLRo0FvZIB6',
        name: 'Enel',
        is_active: 0,
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
