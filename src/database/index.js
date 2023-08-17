const sequelize = require('sequelize');
const configDB = require('../config/database');

const Contatos = require('../models/Contato');

const connection = new sequelize(configDB);

Contatos.init(connection);

module.exports = connection;