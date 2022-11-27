const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
//dotenv is to be able tot use ethen env file for the port - make sure to confirgure it below 
const {user} = require('./user.js');
// const PORT = process.env.PORT || 5000;


dotenv.config(); // config for dotenv 
const app = express();

// app.use('/', express.statics(__dirname))
// app.use('/', express.static(__dirname + '/public'))
app.use(express.static('public'));


// app.listen(PORT, () => console.log(`Server here listening on port ${PORT}!`));
app.listen(process.env.PORT, ()=>{
    console.log(`im on port ${process.env.PORT}`);
})


app.get('/', (req, res)=>{
    const jsonUser = user;
    res.json(jsonUser)  
    res.end()
})




// Exercise 2 : HTTP & JSON
// Instructions

//     Create a server file, name it - server.js
//     In this file, use http to create a server. Send the below Javascript Object to the browser:

//         

//     Hint : use JSON.
//     3. Your server should run on http://localhost:8080/
