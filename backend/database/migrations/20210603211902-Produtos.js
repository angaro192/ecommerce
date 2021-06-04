'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      titulo: { type: Sequelize.STRING(60), allowNull: false },
      foto: { type: Sequelize.STRING, allowNull: false },
      qtd: { type: Sequelize.INTEGER, allowNull: false },
      preco: { type: Sequelize.NUMERIC(10,2), allowNull: false },
      descricao: { type: Sequelize.STRING, allowNull: false },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('produtos')
  }
};
