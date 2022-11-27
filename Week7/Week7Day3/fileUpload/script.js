// // first part - sync and async readfile exaple:
// // ASYNC READ FILE WITH
// // the parameter of the function:
// // 1. name of the file\folder that we want to read
// // 2. utf-8 (like transeling the data that I want to read)
// // 3. functuin with 2 parameters
// const fs = require('fs');
// console.log('1'); // log to check the order of exequition
// fs.readFile('./name.txt','utf-8',(err, data)=> {
//     if(err) {
//         console.log('error=>',err);
//     }
//     else{
//         console.log('2', data);
//     }
// })
// //if I don't put the utf-8 as a parameter, I can log data like this: console.log(data.toString());
// console.log('3');
// //if I run this code, in terms of Async - i'll get:
// // 1, 2, bla bla - *although* the 'bla bla' is BEFORE '2' log.
// // ____________________________________________________________________________________________________
// // SYNC READ FILE WITH
// const f = fs.readFileSync('./name.txt');
// console.log('4', f.toString());
// console.log('5');
// //this is what we get :
// // first log  - 1
// // third log - 3
// // fourth log - 4 bla bla bla
// // fifth log - 5
// // sixth log - 2 bla bla bla
// // ____________________________________________________________________________________________________
// // APANDFILE
// // function with 3 parameters -
// // 1. one of the file (creat\exsisted)
// // 2. the data I want to append
// // 3. callback function)
// fs.appendFile('./myfile', 'a, b, c, d', (err)=>{
//     if(err) {
//         console.log(err);
//     }
// })
// // how to append an object to a file?
// const fs = require('fs');
// let obj = {
//     name: 'jhon',
//     age: 25
// }
// fs.appendFile('./user', JSON.stringify(obj), (err)=>{
//     if(err) {
//         console.log(err);
//     }
// })
// fs.readFile('./user','utf-8',(err, data)=> {
//     if(err) {
//         console.log('error=>',err);
//     }
//     else{
//         console.log(JSON.parse(data));
//     }
// })
// // how to write into a file? it will overwrite the exsisten file from 'bla bla' to 1234
// fs.writeFile('./name.txt', '1234',(err) => {
// if(err) {
//     console.log(err);
// }
// })


// // const fs = require ('fs')

// // console.log('1')

// // //async - throws directly to the thread pool 
// // fs.readFile('./name','utf-8', (err, data)=>{
// //     if(err){
// //         console.log(err)
// //     }
// //     else{
// //         console.log(JSON.parse(data))
// //     }
// // })

// // console.log('2');




// // const f = fs.readFileSync('./name')
// // console.log(f.toString())

// // //appending data to file

// // let obj = {
// //     name:"John",
// //     age:35
// // }

// // fs.appendFile('./myfile', JSON.stringify(obj), (err)=>{
// //     if(err){
// //         console.log(err)
// //     }
// // })


// // fs.appendFile('./myfile', 'a,b,c', (err)=>{
// //     if(err){
// //         console.log(err)
// //     }
// // })
