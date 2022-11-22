const express = require('express')

const app = express() 

app.listen(3000, () => {
    console.log('im on port 3000');
})

// app.use('/', express.static(__dirname))

app.get('/', (req, res) => {
    
    res.write('<h1>HERE IS the first line</h1>');
    res.write('<h3>HERE IS the second line</h3>');
    res.write('<p>HERE IS the  line</h3>');
          
    res.end()
}
)



// HELPPP-  Cant get the two others lines