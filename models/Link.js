const sequelize = require('sequelize');
const database = require('../db');

const Link = database.define('link', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    url: {
        type: sequelize.STRING,
        allowNull: false
    },
    code: {
        type: sequelize.STRING(5),
        allowNull: false
    },
    clicks: {
        type: sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    }
})

module.exports = Link;
