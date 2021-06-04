const express = require('express')
const router = express.Router()

const CargosController = require('../controller/CargosController')

router.post('/', CargosController.create)

module.exports = router