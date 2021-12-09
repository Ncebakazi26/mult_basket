const assert = require("assert");
const fruit_basket = require("../multi_fruit_basket");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/fruit';


const pool = new Pool({
    connectionString
});
describe('The Multifruit_basket function', async function () {
    let basket  = fruit_basket(pool)

    beforeEach(async function () {
        // clean the tables before each test run
    });
    it('should add fruit in the db', async function () { 
        assert.deeEqual("Apples is successfully inserted",await basket.newFruit("Apples", 1, 5.00) )
    });
    it('should select fruit in the db', async function () {
       // await basket.newFruit("Apples", 1, 5.00)
        assert.equal([1], await basket.getId("Apples"))
    });
    it('should select fruit in the db', async function () {
        // await basket.newFruit("Apples", 1, 5.00)
         assert.equal("inserted", await basket.addFruit ("Mango"))
     });



after(function () {
    pool.end();
})
});