const express = require('express');
const dotenv =require('dotenv').config();
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.use('/', express.static(__dirname + 'public'))
// app.use('/static', express.static(__dirname +'public/images'));
// app.use(express.static(path.join(__dirname, 'public')))
// also possible**********************solution b 

// var publicDir = require('path').join(__dirname,'/public'); 
// app.use(express.static(publicDir)); 




app.listen(process.env.PORT, ()=>{
    console.log(`Im on PORT: ${process.env.PORT}`);
})

app.get('/aboutMe/:hobby', (req,res)=>{
    const hobby =  req.params;
    if(req.params != typeof String){
        console.log("hobbies is a word");
    }
    res.send(req.params)
})




app.get('/pic',(req,res)=> {
    res.sendFile(__dirname + '/public/index.html');;
    });