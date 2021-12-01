require('dotenv').config()

const Sequelize = require('sequelize')

const {DB_HOST, DB_NAME, DB_PORT, DB_USER, DB_PASS} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: parseInt(DB_PORT, 10),
    dialect: 'postgres',
})

module.exports = sequelize