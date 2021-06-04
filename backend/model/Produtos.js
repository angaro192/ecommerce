const { Model, DataTypes } = require('sequelize');

class Produtos extends Model {
    static init(sequelize){
        super.init({
            id: { type: DataTypes.INTEGER, primaryKey: true },
            titulo: DataTypes.STRING,
            foto: DataTypes.STRING,
            qtd: DataTypes.STRING,
            preco: DataTypes.STRING,
            descricao: DataTypes.STRING
        },{
            sequelize,
            freezeTableName: true,
            tableName: 'produtos',
            createdAt: false,
            updatedAt: false
        })
    }
    static associate(models){
      this.belongsTo(models.Usuarios, { foreignKey: 'id_usuario', as: 'usuarios'});
  }
}

module.exports = Produtos;