'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Criar uma tela de login',
        description: 'Criar um formulario com um botão de email e password, e adicionar um link para poder recuperar senha',
        id_project: null,
        id_user: null,
        id_status_task: null,
        id_version: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Criar uma tela de criar um usuario',
        description: 'Criar um formulario onde informe o email e passaword para que o usuario possa se cadastrar',
        id_project: 1,
        id_user: 1,
        id_status_task: 1,
        id_version: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Criar uma tela para cadastrar atividade',
        description: 'Criar uma tela para cadastrara atividade',
        id_project: null,
        id_user: null,
        id_status_task: null,
        id_version: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Criar uma tela para criar um projeto',
        description: 'Criar uma tela para cadastrar projeto',
        id_project: null,
        id_user: null,
        id_status_task: null,
        id_version: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Criar uma tela para visualizar o backlog',
        description: 'Criar uma tela para que possa ver todas as atidades no backlog',
        id_project: null,
        id_user: null,
        id_status_task: null,
        id_version: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Criar uma tela visualar todos os usuario',
        description: 'Criar uma tela para listar todos os usuarios',
        id_project: null,
        id_user: null,
        id_status_task: null,
        id_version: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
