const { Model, DataTypes } = require('sequelize');

class Cargos extends Model {
    static init(sequelize){
        super.init({
            id: { type: DataTypes.INTEGER, primaryKey: true },
            cargo: DataTypes.STRING
        },{
            sequelize,
            freezeTableName: true,
            tableName: 'cargos',
            createdAt: false,
            updatedAt: false
        })
    }
}

module.exports = Cargos;