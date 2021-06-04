const { Model, DataTypes } = require('sequelize');

class Usuarios extends Model {
    static init(sequelize){
        super.init({
            id: { type: DataTypes.INTEGER, primaryKey: true },
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            data_nascimento: DataTypes.STRING,
            cpf: DataTypes.BIGINT
        },{
            sequelize,
            freezeTableName: true,
            tableName: 'usuarios',
            createdAt: false,
            updatedAt: false
        })
    }
    static associate(models){
        this.belongsTo(models.Usuarios, { foreignKey: 'id_cargo', as: 'cargos'});
    }
}

module.exports = Usuarios;