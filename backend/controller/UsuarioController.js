const Usuarios = require('../model/Usuarios')
const { Op } = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = {
  async create (req, res) {
    const data = req.body
    const buscaEmailCpf = await Usuarios.findOne({  //Consulta o email ou cpf
      where: { 
        [Op.or]: [
          { email: data.email }, 
          {cpf: data.cpf}] }
        }).then(resultado => {
          if (!resultado) {
            bcrypt.hash(req.body.senha, 10, (err, hash) => { //Criptografia da senha
              if (err) { return res.status(500).send({ erro: err}) }
              data.senha = hash //Insere a senha criptografada nos objeto 'data'
              const cadastro = Usuarios.create(data).then(resultado => {
                return res.status(201).send({ mensagem: 'Usuario criado com sucesso'})
              }).catch(err => {
                return res.status(500).send({ mensagem: 'Ocorreu um erro', erro: err.parent.sqlMessage })
              })
            })
          } else {
            return res.status(409).send({ mensagem: 'Ocorreu um erro', erro: 'E-Mail ou CPF já cadastrado' })
          }
        }).catch(err => { //Aqui onde ocorre erro na busca: por falta de algum dado ou erro de query.
          console.log('Ocorreu um erro: ' + err)
          return res.status(500).send({ mensagem: 'Ocorreu um erro', erro: 'Todos os campos são obrigatorios' })
        })
  }
}
