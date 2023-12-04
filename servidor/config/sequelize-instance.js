// sequelize-instance.js

const { Sequelize } = require('sequelize');
const config = require('./sequelize.config');

const sequelize = new Sequelize(config.development);

// Importa los modelos
const Vuelo = require('./models/Vuelo');
const Avion = require('./models/Avion');
const Piloto = require('./models/Piloto');
const Mantenimiento = require('./models/Mantenimiento');

// Definición de relaciones
Vuelo.belongsTo(Avion);
Vuelo.belongsTo(Piloto);
Avion.hasMany(Mantenimiento);
Avion.hasMany(Vuelo);
Piloto.hasMany(Vuelo);

// ...

module.exports = sequelize;
