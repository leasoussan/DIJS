// const { request } = require('express')
const express = require('express')
const {products} =require('./module/data.js')
const cors = require('cors')

const app =express()

app.use(cors())


app.listen(5000, () => {
    console.log('runing on 5000');
})


app.use('/', express.static(__dirname +'/public'))
// this line allows use to get all the extentions from the page 
// app.get for a get request
// app.post for posting



app.get('/api/products', (req,res) =>{
    res.json(products); // in order to send it to the fron - we need to stringiy it - express does it for me 
})


app.get('/api/products/:productId', (req,res) =>{
    const {productId} = req.params;
    console.log("req", req);
    const product = products.find(item => {
        return item.id == productId
    })
    if(!product){
        return res.status(404).json({msg:'we dont have this one'})
    }
    res.json(product); // in order to send it to the fron - we need to stringiy it - express does it for me 
})




// // to do the search 
// app.get('/api/search', (req, res) =>{
//     const {name} = req.query;
//     const results = products.filter(item =>{
//         return item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase))
//     })
// }