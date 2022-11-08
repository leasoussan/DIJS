// // Promise

// // Its another way of asyncronouse function, with an action at the end 
// // represente the eventuel completion or failure of an action
// const myGrade =80;
// const mypromise = new Promise((resolve, reject) => {
//     if(myGrade > 70){
//         resolve("i get a gift")
//     }else{
//         reject("oy i dont have good grade")
//     }
// // promise take one function with 2 arg 
// })

// console.log(mypromise);

// // 

// const myTimeOUtPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     if(myGrade > 75){
//         resolve("i get a gift")
//     }else{
//         reject("oy i dont have good grade")
//     }
//     },3000)
// })
//     // promise take one function with 2 arg 
// console.log(myTimeOUtPromise);

// // now I want to use the results that I got frpom the promise
// // i cant do myTimeOUtPromise.results
// // the promis take 3 sec and is asyncronouse, meaning I can do other things in the meantime. 
// // I also cant call the function consolo  log as the prmise might not have been done yet
// // I cant call it right away 
// // so i want to tell the function to call another function as soon as the other one it gives me the results 
// // .then() .cathc()


// myTimeOUtPromise.then(function (results) {
//     results.forEach(element => {
//     console.log(element);
//     });

//     // then function is consuming the promis - takes results from promis 
// })



// // methode that takes as parameter the results of the fulfiled promis 
// // then methode is also returning a promise so to work with results, i can chain anothe .then()




// // ---------------------------Class Ex Practice Promise
// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the parameter is a string, the promise resolves with that same string uppercased.
// If the parameter is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")

// const input = '510';


// // LEA LOGIC
// function promiseTest (param) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(typeof input === "string") {
//                 resolve(input.toUpperCase());
//                 console.log("we changed to Upper");
//             }else{
//                 reject(input)
//             }
//         }, 5000)
//     })
// }

// // promiseTest(input)
// // promiseTest
// // .then((input) => input)

// promiseTest("salut")
// .then((input) => console.log(input.repeat(3)))
// .catch((err) => console.log(err))




// // TEACHER LOGIC

// function checkString(input) {
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof input === "string") {
//                 resolve(input.toUpperCase())
//             } else {
//                 reject(input)
//             }
//         }, 5000)
//     })
//     return myPromise
// }



// // here the promise is resolved after 2 sec and we go straignt to the then 
// checkString("hello")
// .then((resuls) => console.log(resuls.repeat(2))) //HELLOHELLO
// .catch((err) => console.log(err))




























