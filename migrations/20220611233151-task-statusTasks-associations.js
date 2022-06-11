'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Tasks', {
      fields: ['id_status_task'],
      type: 'foreign key',
      name: 'tasks_status_task_association',
      references: {
        table: 'StatusTasks',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Tasks', {
      fields: ['id_status_task'],
      type: 'foreign key',
      name: 'tasks_status_task_association',
      references: {
        table: 'StatusTasks',
        field: 'id'
      }
    })
  }
};
