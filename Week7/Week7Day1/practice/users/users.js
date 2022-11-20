const axios = require('axios');
const slugify = require('slugify')


// console.log(slugify("I am lea soussan ", '6'));


const getUsers = async ()=>{
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(res.data);
    }catch (e) {
            console.log(e);
    }
}


getUsers()
// // // fetch

// async function getUser(){
//     try{
//         const getFetch = await fetch('https://jsonplaceholder.typicode.com/users');
//         const getJsonFetch = await getFetch.json()
//         console.log(getJsonFetch);
//         console.log("here");
//         return getJsonFetch;
//     }catch (err){
//             return err
//     }
    
 
// } 


// getUser()
// // let result = getUser();

// // result.then(getJsonFetch => {
// //     console.log(getJsonFetch);
// // })


// module.exports ={
//     getUser
// }
