const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const app =express();
app.set('view engine', 'ejs'); //in order to use ejs template i need folder views- that he goes ther to get html

app.use(cors());
app.use('/', express.static(__dirname +'/public'));

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Im on port${process.env.PORT}`);
} )

app.get('/home', (req,res) => {
    res.render('index')
})


app.get('/about', (req,res)=>{
    res.render('about')
})

app.get('/card', (req,res)=>{
    res.render('card')
})


app.get('/shop', (req,res) =>{
    const products = [
        {id:1, name:"iflope", price:500},
        {id:1, name:"iflouf", price:600},
        {id:1, name:"iflip", price:700}
    ]
    res.render('shop', {
        data:products
    });

})