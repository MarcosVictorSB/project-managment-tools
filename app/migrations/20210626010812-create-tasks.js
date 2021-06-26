'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      id_project: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Projects', key: 'id' }
      },
      id_user: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      id_status_task: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'StatusTasks', key: 'id' }
      },
      id_versao: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Versions', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};