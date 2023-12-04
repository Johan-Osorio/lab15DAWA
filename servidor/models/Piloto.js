// models/Piloto.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-instance'); // Ajusta la ruta según tu estructura

const Piloto = sequelize.define('Piloto', {
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  horasVuelo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Piloto;
