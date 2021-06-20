'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Criar funcionalidade para seguir usuarios',
        description: 'O usuario deseja entrar no perfil de outro \
        usuario e clicar em um botão para seguir o messmo',
        id_project: 1,
        id_user: null,
        id_status_task: 1,
        id_version: null,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      title: 'Criar funcionalidade para postar foto',
      description: 'O usuario deseja selecionar foto do celular e postar no instagram',
      id_project: 1,
      id_user: null,
      id_status_task: 1,
      id_version: null,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
      title: 'Criar funcionalidade para postar video',
      description: 'O usuario deseja selecionar video e postar no instagram',
      id_project: 1,
      id_user: null,
      id_status_task: 1,
      id_version: null,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: 'Criar funcinalidade o usuario possa criar story',
      description: 'O usuario deseja criar videos temporarios',
      id_project: 1,
      id_user: null,
      id_status_task: 1,
      id_version: null,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: 'Criar bate papo',
      description: 'O usuario deseja selecionador um seguir o poder conversar com o mesmo por meio de um chat',
      id_project: 1,
      id_user: null,
      id_status_task: 1,
      id_version: null,
      createdAt: new Date(),
      updatedAt: new Date()
  },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
