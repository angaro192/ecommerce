const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
require('dotenv').config()

const Usuario = require('../model/Usuarios')
const Produtos = require('../model/Produtos')
const Cargos = require('../model/Cargo')

const connection = new Sequelize(dbConfig)

Usuario.init(connection)
Produtos.init(connection)
Cargos.init(connection)

Produtos.associate(connection.models)
Usuario.associate(connection.models)

module.exports = connection;