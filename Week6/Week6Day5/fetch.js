
// // Use async await, and fetch a fact on cats and display it. Use this third party API : https://catfact.ninja/fact
// // In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM
// // In the JS file, create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
// // Make sure to use try and catch



// async function fetchCats(){
//     console.log("here 1");
//     try {
//         const getCats = await fetch('https://catfact.ninja/fact');
//         const catToJson = await getCats.json();
      
//         if(getCats.status !== 200){
//             throw new Error("not working");
//             console.log("ineror");
//        }else{ 
//             const getFact = catToJson.fact;
//             console.log("middle ", getFact);
//             displayCatFact(getFact); 
//         }
//     }catch(err){
//         return err
//     }  
// }

// function displayCatFact(fact){
//     // const factsList = []
//     console.log('here');
//     const getObj = document.querySelector('#facts_display');
//     const createObj = document.createElement('h3');
//     const createText = document.createTextNode(fact);
//     createObj.appendChild(createText);
//     getObj.appendChild(createObj)

// }

// const setEventOnButton = document.querySelector('.facts_btn')
// setEventOnButton.addEventListener('click', fetchCats)