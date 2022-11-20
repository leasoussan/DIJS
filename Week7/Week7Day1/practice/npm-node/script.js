// let http = require("http");
// const server = http.createServer( () => {
//     console.log('I am listening....');
//  });
//  server.listen(3000);
 

// //  const server = http.createServer(options, function (req, res) {
// //     res.writeHead(200);
// //     res.end("hello world\n");
// //   }).listen(3000);






function welcomeUser() {
    console.log("Hello new student, you are starting to learn Node.js")
}

welcomeUser()


module.exports = {
    welcomeUser
}