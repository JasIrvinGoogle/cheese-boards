const { sequelize } = require('./db'); 
const { User, Board, Cheese } = require('./index');
const { userData, cheeseData, boardData } = require('./seedData');

//sync method create tables based on the models provided - load everytime  
describe('User, Board & Cheese Models', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    })

    // Create Tests - CRUD
    test('Can Create User - User Model Test', async () => {
        const user = await User.create(userData[0]); 
        expect(user.name).toEqual('Jasmine'); 
        expect(user.email).toEqual('jasmine@testemail.com');
    })

    test('Can Create User 2 - User Model Test', async () => {
        const user2 = await User.create(userData[1]); 
        expect(user2.name).toEqual('Charlie'); 
        expect(user2.email).toEqual('charlie@email.com'); 
    })

    test('Can Create Cheese - Cheese Model Test', async () => {
        const cheese1 = await Cheese.create(cheeseData[0]); 
        expect(cheese1.title).toEqual('American'); 
        expect(cheese1.description).toEqual('American is a creamy, smooth cheese made from blending natural cheeses. It comes in several forms including individually wrapped cheese slices, small pre-sliced blocks and large blocks. It melts well.');
    })

    test('Can Create Cheese 2 - Cheese Model Test', async () => {
        const cheese2 = await Cheese.create(cheeseData[1]);
        expect(cheese2.title).toEqual('Asiago'); 
        expect(cheese2.description).toEqual('Asiago, a nutty-flavored cheese, comes in two forms: fresh and mature. The fresh has an off-white color and is smoother and milder, while mature Asiago is yellowish and somewhat crumbly. Depending on its age, Asiago can be grated, melted or sliced.');
    })

    test('Can Create Board - Board Model Test', async () => {
        const board1 = await Board.create(boardData[0]); 
        expect(board1.type).toEqual('Rich Flavor Board'); 
        expect(board1.description).toEqual('Featuring rich cheese flavors and strong tastes');
        expect(board1.rating).toEqual(7); 
    })

    test('Can Create Board 2 - Board Model Test', async () => {
        const board2 = await Board.create(boardData[1]);
        expect(board2.type).toEqual('Variety Cheese Board');
        expect(board2.description).toEqual('A variety of cheeses - from french cheeses to american');
        expect(board2.rating).toEqual(10); 
    })
})