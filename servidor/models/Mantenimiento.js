// models/Mantenimiento.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-instance'); // Ajusta la ruta según tu estructura

const Mantenimiento = sequelize.define('Mantenimiento', {
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Mantenimiento;
