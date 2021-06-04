'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('cargos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cargo: { type: Sequelize.STRING(60), allowNull: false }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cargos');
  }
};
