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

    // Read Test - CRUD
    test('Can Read User - Find User Test', async () => {
        const readUser1 = await User.findAll(); 
        expect(readUser1[0].name).toEqual('Jasmine');
        expect(readUser1[0].email).toEqual('jasmine@testemail.com');
    })

    test('Can Read User 2 - Find User Test', async () => {
        const readUser2 = await User.findAll(); 
        expect(readUser2[1].name).toEqual('Charlie');
        expect(readUser2[1].email).toEqual('charlie@email.com'); 
    })

    test('Can Read Cheese - Find Cheese Test', async () => {
        const readCheese1 = await Cheese.findAll(); 
        expect(readCheese1[0].title).toEqual('American');
        expect(readCheese1[0].description).toEqual('American is a creamy, smooth cheese made from blending natural cheeses. It comes in several forms including individually wrapped cheese slices, small pre-sliced blocks and large blocks. It melts well.');
    })

    test('Can Read Cheese 2 - Find Cheese Test', async () => {
        const readCheese2 = await Cheese.findAll(); 
        expect(readCheese2[1].title).toEqual('Asiago');
        expect(readCheese2[1].description).toEqual('Asiago, a nutty-flavored cheese, comes in two forms: fresh and mature. The fresh has an off-white color and is smoother and milder, while mature Asiago is yellowish and somewhat crumbly. Depending on its age, Asiago can be grated, melted or sliced.');
    })

    test('Can Read Board - Read Board Test', async () => {
        const readBoard1 = await Board.findAll(); 
        expect(readBoard1[0].type).toEqual('Rich Flavor Board');
        expect(readBoard1[0].description).toEqual('Featuring rich cheese flavors and strong tastes');
        expect(readBoard1[0].rating).toEqual(7);
    })

    test('Can Read Board 2 - Read Board Test', async () => {
        const readBoard2 = await Board.findAll();
        expect(readBoard2[1].type).toEqual('Variety Cheese Board');
        expect(readBoard2[1].description).toEqual('A variety of cheeses - from french cheeses to american');
        expect(readBoard2[1].rating).toEqual(10); 
    })
})