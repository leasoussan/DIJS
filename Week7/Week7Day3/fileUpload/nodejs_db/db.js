const knex = require('knex')

const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : 'lucky.db.elephantsql.com',
      port : 5432,
      user : 'jitfoitb',
      password : 'zc5PFGsaolg27c4gOOc1j57ekk14J764',
      database : 'jitfoitb'
    }
  });

// this is a way to check that Im connected to the  and to get stuff with the raw data
//   db.raw('SELECT * FROM products')//this is a promise> to resolve it > .then
//   .then(res => {
//     console.log(res.rows);
//   })
//   .catch(e =>{
//     console.log(e);
//   })


// db
// .select('id', 'name', 'price')
// .from('products')
// .then(data =>{
//     console.log(data);
// }) 
// .catch(e =>{
//     console.log(e);
// })


//other oway to do the FROM 
db('products')
.select('id', 'name', 'price')
// WHEN I want the coindition WHERE
.where({id:2})
.orWhere('id', 3)
.then(data => {
    console.log(data);
})
.catch(e =>{
    console.log(e);
})

