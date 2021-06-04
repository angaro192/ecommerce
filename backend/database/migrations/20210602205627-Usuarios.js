'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      senha: { type: Sequelize.STRING, allowNull: false },
      data_nascimento: { type: Sequelize.STRING, allowNull: false },
      cpf: { type: Sequelize.BIGINT, allowNull: false },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};
