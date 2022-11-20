let http = require('http');

const mainApp = require('./main.js')

const b = 5
// console.log(mainApp.largeNumber + b);




// PART 2


// const server = http.createServer(function (req, res) {
//     // res.writeHead(200);
//     res.setHeader('Content-Type', 'text/html');
//     res.write("<h1>Hi there at the frontend</h1>");

//     res.end("My Module is" + (mainApp.largeNumber + b) );

// }
// );
// server.listen(3000);


// console.log('I am listening....');





// PART 3
const getDate = ()=>new Date();


const server = http.createServer(function(req,res){
    res.setHeader('content-type', 'text/html'),
    res.write("The Date and time are Currently " + getDate());
    res.end("...Enjoy");
}
);
 server.listen(8080);





// const host = 'localhost';
// const port = 8000;
// const requestListener = function (req, res) {
//     res.writeHead(200);
//     res.end("My first server!");
// };
// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });