// Exercise 1 : Comparison
// Instructions

//     Create a function called compareToTen(num) that takes a number as an argument.
//     The function should return a Promise:
//         the promise resolves if the argument is less than 10
//         the promise rejects if argument is greater than 10.

// Test:




function compareToTen(num){
   return new Promise((resolve, reject) => {
        if(num<10){
            resolve("less than 10 we are ok ")
        }else{
            reject("please seek a number less than ten ")
        }
    })
    
}
// console.log(compareToTen(15));

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// // //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))





//   Exercise 2 : Promises
// Instructions

//     Create a promise that resolves itself in 4 seconds and returns a “success” string.
//     How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
//     Add code to catch errors and console.log ‘Ooops something went wrong’.


// function promiseFour(){
//     return new Promise((resolve, reject)=>{
//         setTimeout()
//     } )
//     }

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         return console.log("SUCCESS");
//     },4000)
// })


Promise.resolve().then(setTimeout(()=>{
        return console.log("SUCCESS");},4000))


        // not sure the usage of this 


//  Exercise 3 : Resolve & Reject
// Instructions

//     Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
//     Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

Promise.resolve().then(console.log(3))



// Exercise 4: quizz - not mandatory


// Follow this tutorial and do the quizz until the page called “a few tricks with promises”.

