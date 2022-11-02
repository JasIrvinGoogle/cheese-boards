const { sequelize } = require('./db'); 
const { User, Board, Cheese } = require('./index');
const { userData, cheeseData, boardData } = require('./seedData');

//sync method create tables based on the models provided - load everytime  
describe('User, Board & Cheese Models', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    })

    test('Can Create User - User Model Test', async () => {
        const user = await User.create(userData[0]); 
        expect(user.name).toEqual('Jasmine'); 
        expect(user.email).toEqual('jasmine@testemail.com');
    })
})