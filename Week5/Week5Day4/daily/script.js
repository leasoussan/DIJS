
// 1st Challenge
// Instructions

// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// Example

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// // // expected output: Array [3, 42, "foo"]


// Promise.all([promise1, promise2, promise3]).then((results) =>{
//     try{
//         const printArray = results;
//         console.log(printArray); 
    
//     } catch{
//         throw new Error("not good ")
//     }
// })



// 2nd Challenge
// Instructions

// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

//     In the HTML file, create a form with 4 inputs:
//         the latitude and longitude of the first city
//         the latitude and longitude of the second city

//     Retrieve the input’s value and display the hour of the sunrise for both city 
// ONLY when both promises are resolved
//     Hint : Use Promise.all()


// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242



const getInfo = (event)=> {
    event.preventDefault();
    const latitutdeCityOne = event.target.city1_latitude;
    const longitudeCityOne = event.target.city1_longitude;
    const latitutdeCityTwo = event.target.city2_latitude;
    const longitudeCityTwo = event.target.city2_longitude;
}

const getButton = document.getElementById('cityForm');
getButton.addEventListener('submit', getInfo)

console.log(latitutdeCityOne,longitudeCityOne);
console.log(latitutdeCityTwo,longitudeCityTwo);


// async function getCityOne(){
//         const form = document.forms[0]
//         return console.log("here");
//     }

// async function getCityTwo(){
//     const form = document.forms[0]
//     return console.log("here");
// }    


// async function getUrl(){
//     // const longitude = 
// }



// Notes on Async
// await is only in a async function

