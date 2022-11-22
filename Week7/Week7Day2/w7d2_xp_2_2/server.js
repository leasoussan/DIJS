// In the server.js file, reate cyour server using express.
//     Create a route /, and use a GET request method.
//         The path of the route should contain the route parameter id. 
// Check out the lesson named Express Routes & Queries in the Course Notes.
//         The handler function of the route should respond with the value of the route parameter. 
// Check out req.params.
//     Run on port http://localhost:3000/ and add an id, for example http://localhost:3000/1234

const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors());

app.use('/', express.static(__dirname + '/public'))

app.listen(3000, (req, res)=>{
    console.log("im on port 3000");
})


app.get('/:id', (req, res)=>{
    console.log(req.params);
    res.send(req.params);
})