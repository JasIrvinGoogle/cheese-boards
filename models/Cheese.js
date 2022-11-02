const { Sequelize, sequelize } = require('./db'); 

let Cheese = describe('cheese', {
    title: Sequelize.STRING, 
    description: Sequelize.STRING
})

module.exports = {
    Cheese
}