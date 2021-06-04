const express = require('express')
const app = express()

const rotaUsuario = require('./routes/usuario')
const rotaProdutos = require('./routes/produtos')
const rotaCargos = require('./routes/cargos')
app.use('/usuario', rotaUsuario)
app.use('/produtos', rotaProdutos)
app.use('/cargos', rotaCargos)

module.exports = app