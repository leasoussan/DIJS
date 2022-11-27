const express = require('express');
const cors = require('cors');
// const http =require('http') we dont need this when we use express
const dotenv = require('dotenv');
const bodyParser = require("body-parser")
const {db} = require('./data/products.js')


dotenv.config();

// CHECK IF WE ARE CONNECTED
// db.raw('SELECT 1')
// .then(data =>{
//     console.log(data.rows);
// })
// .catch(e =>{
//     console.log(e);
// })


const app =express();
app.use(cors())// if I want to use the cors 
// app.use another function - a middle ware is a function 
 


app.use(express.json())
app.use(express.urlencoded({extended:true}))//instead of bodyParser


// app.listen(8080, ()=> {
//     console.log("on port 8080");
//  }) we dont write it like this as It will be seen by others therfore we put it on env.

app.use('/',express.static(__dirname + '/public'));
// this is by express - to serve my static files

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// which parses the “body” of the response. This kind of module is called middleware as it sits in the middle of the request/response cycle and can modify either the request or response. 

 app.listen(process.env.PORT, ()=>{
    console.log(`you are on port ${process.env.PORT}`);
 })

// CRUD

// app.delete('/api/products/:id', (req, res)=>{
//     const {id} = req.params;
//     const index = products.findIndex(item=>{
//         return item.id == id
//     })

// // this means that -1 its null
//     if(index === -1){
//         return res.status(200).json({_msg:"not found"})
//     }
//     products.splice(index, 1)
//     res.json(products)
// })



//DELETE - Delete - delete a product with db
app.delete('/api/products/:id',(req,res)=>{
    const {id} = req.params;
    db('products')
    .where({id})
    .del()
    .returning('*')
    .then(rows => {
      res.json(rows)
    })
    .catch(e => {
      res.status(404).json({msg:'product not found...'})
    })
  
  })

// ---------------------------------------------------------
// Create POST  a New Product
// app.post('/api/products', (req, res)=>{
//     res.json({msg:'post'})
//     const {name, price} = req.body;
//     const newProduct = {
//         id: products.length+1,
//     name :name,
//     price:price,
//     }
//     products.push(newProduct)
//     res.json(products)
// })



// WITH DATABASE CONNECT
app.post('/api/products', (req, res)=>{
    
    const {name, price} = req.body;
    db('products')
    .insert({
        name:name,
        price:price,
    })
    .returning('*')
    .then(rows =>{
        res.json(rows)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({msg:"error"})
    })
})





// _______________________________________________________________________________---
// // Update PUT - to upddate.modify product
// app.put('/api/products/:id', (req,res) =>{
//     const {id} = req.params;
// // here i get from the req parameter 
//     const {name, price} = req.body ;
//     // here i take the contente from the body to be able to cahnge it 
//     const index = products.findIndex(item=>{
//         return item.id == id
//     })// we want to find the index of the array that I want to modify 

//     if(index === -1){
//         return res.status(404).json({msg:"products not found"})
//     }

//     const updateProduct = {
//         id: products[index].id,
//         name, 
//         price,
//         // id : products[index].id;
//         // id:id // could be writen like this id as it's equal to the const declaraion done above
//     }
//     products[index]= updateProduct;
//     res.json(products)
// })





// Update - Put - Update/Modify a product DB
app.put('/api/products/:id',(req,res)=>{
    const {id} = req.params;
    const {name, price} = req.body;
  
    db('products')
    .where({id})
    .update(req.body)
    .returning('*')
    .then(rows => {
      res.json(rows)
    })
    .catch(e=>{
      console.log(e);
      res.status(404).json({msg:e.messgae})
    })
  
  
  })
  



// =========GET========================================================


// // READ- get all the product
//  app.get('/api/products', (req,res) =>{
//     res.json(products) ;
//  } )

// >>>WITH DATABASE connection
// READ- get all the product
app.get('/api/products', (req,res) =>{
    db('products')
    .select('id', 'name', 'price')//object in array from db
    .then(rows =>{
        res.json(rows)
    })
    .catch(e =>{
        console.log(e);
        res.status(404).json({msg:"error here"})
    })
 } )

// =================================================================

// READ GET Search for a product - query 
// app.get('/api/search/', (req, res)=>{
//     const {q} = req.query;
//     const results = products.filter(item => {
//         return item.name.toLowerCase().includes(q.toLowerCase())
//     })
//     if(res.length === 0){
//         return res.status(200).json({msg:"we dont have this one"})
//     }
//     res.json(results)
// })


// WITH DB connection 

// READ GET Search for a product - query 
app.get('/api/search/', (req, res)=>{
    const {q} = req.query;
    db('product')
    .select('id', 'name', 'price')
   .whereILike('name', `${q}%`)
   .then(rows=>{
    if(rows.length === 0){
    res.status(404).json({msg:"not int he list "})
    }
    res.json(rows)
})
.catch(e=>{
    console.log(e);
    res.status(404).json({msg:"error"})
})

})


// ============================================================
// READ -GET - get new product with param
// app.get('/api/product/:id', (req,res) => {
//     const {id} = req.params;
//     const product = products.find(item => {
//         return item.id == id
//     })
//     if(!product){
//         return res.status(404).json({msg:"not found"})// here we are transforming the message to json as I expect a json file in the front 
//     }
//     res.json(product)
// })



// WITH DATABASE CONNECTION
// READ -GET - get new product with param
app.get('/api/product/:id', (req,res) => {
    const {id} = req.params;
    db('products')
    .select('id', 'name', 'price')
    .where({id})
    .then(rows=>{
        if(rows.length === 0){
        res.status(404).json({msg:"not int he list "})
        }
        res.json(rows)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({msg:"error"})
    })
})
