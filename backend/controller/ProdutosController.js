const Produtos = require('../model/Produtos')
const Usuarios = require('../model/Usuarios')
const { Op } = require('sequelize')

module.exports = {
  async create (req, res) {
    const data = req.body
    const buscaUsuario = await Usuarios.findOne({ where: { id: data.id_usuario } }) 
    if (buscaUsuario) {
      const cadastro = Produtos.create(data).then(result => {
        return res.status(201).send({ mensagem: 'Produto criado com sucesso'})
      }).catch(erro => {
        return res.status(409).send({ mensagem: 'Ocorreu um erro ao criar o produto.', erro: erro})
      })
    } else {
      return res.status(404).send({ mensagem: 'Id do usuario não foi encontrada' })
    }
  },

  async readAll (req, res) {
    const data = req.body
    const buscaProdutos = await Produtos.findAll()
    return res.status(200).send({ produtos: buscaProdutos })
  },

  async read (req, res) {
    const data = req.params
    const buscaPorId =  await Produtos.findByPk(data.busca)
    if (!buscaPorId) {
      const buscaPorTitulo = await Produtos.findAll({
        where: { titulo: { [Op.substring]: data.busca}}
      })
      return res.status(200).send({ resultado: buscaPorTitulo })
    } else {
      return res.status(200).send({ resultado: buscaPorId })
    }
  },

  async update (req, res) {
    const data = req.body
    const buscaPorId =  await Produtos.findByPk(data.busca)
    if (!buscaPorId) {
      const updated = await Produtos.update(data).then(result => {
        return res.status(200).send({ mensagem: 'Produto atualizado com sucesso.' })
      }).catch(err => {
        return res.status(500).send({ mensagem: 'Ocorreu um erro ao atualizar o produto', erro: err })
      })
    } else {
      return res.status(404).send({ mensagem: 'Id do produto não foi encontrada' })
    }
  },

  async delete (req, res) {
    const data = req.params
    const buscaPorId =  await Produtos.findByPk(data.id)
    if (buscaPorId) {
      const deleted = await Produtos.destroy({ where: { id: data.id }}).then(result => {
        return res.status(200).send({ mensagem: 'Produto deletado com sucesso.' })
      }).catch(err => {
        return res.status(500).send({ mensagem: 'Ocorreu um erro ao deletar o produto', erro: err })
      })
    } else {
      return res.status(404).send({ mensagem: 'Id do produto não foi encontrada' })
    }
  }
}
