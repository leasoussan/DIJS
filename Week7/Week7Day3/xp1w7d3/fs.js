// EX 1 XP1 read a fil

// const fs =require('fs');
// fs.readFile('data.txt','utf-8',  (err, data)=> {
//     if(err){
//         console.error(err);
//         return
//     }
//     console.log(data);
// })




// EX 2 XP 1 write a file

// TO ADD>>>CHALLENGE- FETCH AND WRITE

const axios = require("axios");
let fs =require('fs')

let textContente = 'The is a text that I m trying to put into the new doc'


const options = {
  method: 'GET',
  url: ('https://www.affirmations.dev/'),

};

axios.request(options).then(function (response) {
	const quote = JSON.stringify(response.data);
   
    fs.writeFile('text.txt', quote, (err)=>{
        if(err){
            // console.error(err);
            return console.log("ici err");
        }
        console.log('done with writing in the txt file');

    })
    // .catch((e) => {
	// console.error(e);
});

// })







// APPEND TO FILE TXT

// const fs =require('fs')
// const appendingText = '<br> this is the sentence I appended. COOL NO ?'
// fs.appendFile('text.txt', appendingText, (err, data) =>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("I appended successfully");
// }) 



// DELETE FILE``

// const fs = require('fs');

// fs.unlink('text.txt', (err,data)=>{
//     if(err){
//         console.error(err);
//         return
//     }
//     console.log("you deleted....it/s gone");
// })
