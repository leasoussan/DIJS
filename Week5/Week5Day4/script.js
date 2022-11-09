// New way to write promises 
// // practice class ex

// // Exercise Game - The word game
// // You need to create 4 functions, each of them return a promises
// // The 1st function, receives 2 famous persons name from the user - 
// // if the names are not a string -> reject else - resolve with the name of the 2 ppl in an array
// // The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun
// // The 3rd function, receives a city if the city doesn't start with an uppercase letter -> reject else - resolve with the city name
// // The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" -> reject (use the endWith string method) else resolve with the verb
// // The last function, is an async function - it receives all the above promises, and return a sentence with it Ex: "Beyonce is playing football with Barack Obama in Paris"

// // names = ["GeorgeClooney", "julia Roberts"]

// // async function promiseOne(names){
// // 	if(names.every((element) => typeof element != 'string')){
// // 		throw new Error("please make sure its only strings")
// // 	} else {
// // 		return names;
// // 	}
// // }

// // promiseOne(names)

// // Correction
// async function getName(nameOne, nameTwo){
// 	if(typeof nameOne !== "string" && typeof nameOne !== "string"){
// 		throw new Error("wroong entry ")
// 	}else{
// 		return [nameOne, nameTwo]
// 	}
// }


// const noun = 'testk'
// async function promiseTwo(noun) {
// 	// const nounSplit = noun.split('')//no need to spleet
// 	if(noun.length >= 3){
// 		return console.log(noun);;
// 	}else{
// 		throw new Error("please check again")
// 	}
// }

// promiseTwo(noun)








// const city= 'Telaviv'
// async function promiseThree(city) {

// 	if(city[0].toUpperCase() != city[0]){
// 		throw new Error("nop")
// 	}else{
// 		return console.log("yay");
// 	}
// }

// promiseThree(city)



// async function getVerbes(getVerbe) {
// 	if(getVerbe.endWith("ing")){
// 		throw new Error("nop")
// 	}else{
// 		return verb
// 	}
// }



// async function game(){
// 	const name = await getName("beyonce");
// 	const noun = await promiseTwo();
// 	const city = await promiseThree();
// 	const verb = await getVerbes();
// 	const sentence = `${name[0]} is ${verb} ${noun} with ${name[1]} in ${city}`
// }

// game()


// PROMISE and FTECH 
// // oldWay
// function getData(){
//     fetch("url")
//     .then((res)=>{
//       if(res.status === 200){
//         resolve("ok")
//       } else{
//         reject("mo")
//       }
//     })
// }



async function getUser() {
    const results = await fetch('https://jsonplaceholder.typicode.com/users/1');
    console.log("results", results);//this is the response object- but I cant acccess it so Im doing a .json() >>whic will return another promise 
    // so to consume the promis I need to await
    if (results.status != 200) {
        throw new Error("Not good")
    } else {
        const user = await results.json()
        // console.log("results", results.json()); i await in order to get a promise
        console.log("user", user);
        return user.username;//i need to return it in order to be able to have a result for the async function promis
    }

}




async function getGif(username) {
    const results = fetch(`https://api.giphy.com/v1/gifs/search?q=${username}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    console.log(results);//response object - to see status
    if (results.status != 200) {
        throw new Error("Not good")
    } else {
        const gif = await results.json();// here i get back a proimise i wait for it 
        const url = gif.data.image.original.url;
        console.log("gif", gif);
    }
}



async function mix() {
    try {
        const getName = await getUser();
        const getGif = await getGif(getName);
        addGif(gif) 
    } catch (err) {
       addGif('https://giphy.com/clips/laguarimba-glitch-guarimba-film-festival-VWKZo6eOpI9C58M2k1');
        
    }

}

mix()

function addGif(url) {
    const section = document.querySelector('#conatiner');
    const image = document.createElement("img");
    image.src = url;
    section.appendChild(image)

}