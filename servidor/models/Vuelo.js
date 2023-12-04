// models/Vuelo.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-instance'); // Ajusta la ruta según tu estructura

const Vuelo = sequelize.define('Vuelo', {
  numeroVuelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Vuelo;
