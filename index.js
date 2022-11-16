const { User } = require('./models/User');
const { Board } = require('./models/Board'); 
const { Cheese } = require('./models/Cheese'); 

//Associations - one user can have many boards, one board can have many cheeses, cheese can be on multiple boards

//One to Many 
User.hasMany(Board); // one user to many boards
Board.belongsTo(User); //user required to have a board - board has to belong to a user
 
//Many to Many 
Board.belongsToMany(Cheese, {through: 'CheeseBoard'});
Cheese.belongsToMany(Board, {through: 'CheeseBoard'})


module.exports = {
    User, 
    Board, 
    Cheese
};