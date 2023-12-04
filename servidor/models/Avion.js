// models/Avion.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-instance'); // Ajusta la ruta según tu estructura

const Avion = sequelize.define('Avion', {
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaUltimoMantenimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Avion;
