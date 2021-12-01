const { Model, DataTypes} = require('sequelize')

const sequelize = require('./sequelize')

class Todos extends Model{}

Todos.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    todo: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    paranoid: false,
    timestamps: false,
    tableName: 'todos'
})

module.exports = Todos