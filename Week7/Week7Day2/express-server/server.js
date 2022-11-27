const express = require('express');
const cors = require('cors');
const {products} = require('./modules/data.js')

const app = express();
app.use(cors())

app.listen(5000, () => {
  console.log('running on 5000');
})

app.use('/', express.static(__dirname + '/public'))

// console.log(__dirname);

app.get('/api/products',(req,res)=>{
  res.json(products);
});

app.get('/api/products/:productId', (req,res)=>{
  // console.log(req.params);
  const {productId} = req.params;
  const product = products.find(item => {
    return item.id == productId
  })
  if(!product){
    return res.status(404).json({msg:'Product not found'})
  }
  res.json(product);
})

app.get('/api/search', (req,res) => {
  const {name} = req.query;
  const results = products.filter(item => {
    return item.name.toLowerCase().includes(name.toLowerCase())
  })

  if(results.length === 0){
    return res.status(200).json({msg:'No Products matched your search'})
  }

  res.json(results);
})

// app.get('/zivuch' ,(req,res)=>{
//   res.sendFile(__dirname + '/public/about.html')
// })
