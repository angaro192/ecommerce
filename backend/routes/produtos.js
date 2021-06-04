const express = require('express')
const router = express.Router()

const ProdutosController = require('../controller/ProdutosController')

router.post('/', ProdutosController.create)
router.get('/', ProdutosController.readAll)
router.get('/:busca', ProdutosController.read)
router.delete('/:id', ProdutosController.delete)

module.exports = router