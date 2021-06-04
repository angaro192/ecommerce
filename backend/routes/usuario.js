const express = require('express')
const router = express.Router()

const UsuarioController = require('../controller/UsuarioController')

router.post('/', UsuarioController.create)

module.exports = router