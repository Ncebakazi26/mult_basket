module.export = function multi_fruit_basket(pool){

    async function newFruit(fruit,qty,price){
        var id = await getId()
        await pool.query (`insert into fruit_basket ( fruit_name , quantity, price,id_multi) values($1,$2,$3)`,[fruit,qty,price,id])

    }
    async function getId(name){
      var ids=  await pool.query(`select id from  multi_basket where names = $1`,[name])
      return ids.rows[0].id
    }
    async function addFruit(name){
     await pool.query(`insert into multi_basket(names) values($1) `,[name])

    }
    async function removeEmptyBasket(){
        await pool.query(`delete from multi_basket where `)

    }
    async function total(){

    }


    return{
        newFruit,
        addFruit,
        removeEmptyBasket,
        getId,
        total

    }
}