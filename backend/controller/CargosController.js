const Cargos = require('../model/Cargo')

module.exports = {
  async create (req, res) {
    const data = req.body
    const cadastro = Cargos.create(data).then(result => {
      return res.status(201).send({ mensagem: 'Cargo criado com sucesso'})
    }).catch(err => {
      return res.status(500).send({ mensagem: 'Ocorreu um erro na criação do cargo', erro: err })
    })
  }
}