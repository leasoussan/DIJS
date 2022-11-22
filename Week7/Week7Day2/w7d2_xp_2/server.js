const express = require('express');
const dotenv = require('dotenv');
// const cors =require('cors');

dotenv.config();

const app = express();
// app.use(cors());

app.listen(process.env.PORT, ()=>{
    console.log(`im on Port ${process.env.PORT}`);
}) 

app.use('/', express.static(__dirname + '/public'))

// CHECK Error



app.get('/tes', (req,res)=>{
    console.log("testing here");
    if(res.status != 200){
        return console.log("bad");
    }
    const user = {
                firstname: 'John',
                lastname: 'Doe'
                }
                // console.log("here", user);
    res.json(user)            
    res.end()
        
})
