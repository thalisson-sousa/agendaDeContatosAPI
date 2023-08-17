const {Model, DataTypes} = require('sequelize');

class Contatos extends Model{
    static init(sequelize) {
        super.init(
            {
                nome: DataTypes.STRING,
                sobrenome: DataTypes.STRING,
                contato: DataTypes.INTEGER,
                imgURL: DataTypes.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

module.exports = Contatos;
