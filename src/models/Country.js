// models/Country.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Country = sequelize.define('Country', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    populationHistory: {
        type: DataTypes.JSON,
        allowNull: true
    },
    flagUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    borders: {
        type: DataTypes.JSON,
        allowNull: true
    }
});

module.exports = Country;
