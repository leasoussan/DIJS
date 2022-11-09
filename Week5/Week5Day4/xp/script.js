// Instructions

// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));



// async function fetchFunction(){
//     const getData = await fetch("https://www.swapi.tech/api/starships/9/");
    
//     if(getData.status === 200){
//         const getObject = await getData.json();
//         return console.log(getObject);
//     }
    
    
// }

// fetchFunction()


// // ______________________
// Exercise 2: Analyze
// Instructions

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//     Analyse the code provided above before executing it - what will be the outcome?
// console.log('calling');
// console.log(result);