'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('usuarios', 'id_cargo', {
      type: Sequelize.INTEGER,
      references: { model: 'cargos', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('usuarios', 'id_cargo')
  }
};
