const path = require('path'); 
const { Sequelize, Model } = require('sequelize');

const sequelize = new Sequelize ({
    dialect: 'sqlite', 
    storage: path.join(_dirname, 'db.sqlite')
})

module.exports = {
    sequelize, 
    Sequelize
}