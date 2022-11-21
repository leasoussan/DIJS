const http = require('http')
const express = require('express')
const {user} = require('./user.js')

const app = express() 

app.listen(3000, () => {
    console.log('im on port 3000');
})

// app.use('/', express.static(__dirname))

app.get('/', (req, res) => {
    res.send('<h1>HERE IS the first line</h1>')
    res.write('<h3>HERE IS the second line</h3>')
    res.end('<p>HERE IS the third line</p>')
}
)



// HELPPP-  Cant get the two others lines