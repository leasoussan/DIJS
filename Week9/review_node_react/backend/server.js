const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {db} = require('./data/products.js');

dotenv.config();

const app = express();


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Lea in Da house ${process.env.PORT}`);
})
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',express.static(__dirname +'/public'));


app.get('/api/products', (req,res) => {
    // db('products')
    // .select('id','name','price')
    // .then(rows => {
    //   res.json(rows)
    // })
    // .catch(e=>{
    //   console.log(e);
    //   res.status(404).json({msg:e.messgae})
    // })
  })