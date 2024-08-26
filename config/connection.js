const sequelize = require('sequelize');
const sequelize = require('sequelize');
require('dotnev').config();

const sequelize = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_Password, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

module.exports = sequelize;