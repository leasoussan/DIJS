//  self invoking anonymous FUNCTIONS
// Add in your html file a div with an id of container
// Create a self invoking function that takes one parameter the name of the user
// When invoked, the function adds the name of the user in a sentence in the div 


// let name ="lola";

// (function(name){
//     const userName = document.getElementById("header").textContent = `hello dear ${name}`;
// })(name);





// Exercise 1 : guess what will be console.logged

// function setObj(person) {
//     person.age = 25; 
//     return person;
// }
// //   response  >>>object 

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ?

// console.log(personObj2); // -> ?


// Exercise 2 guess what will be console.logged

// function setObj(person) {
// 	person = {
//         name: 'John',
//         age: 50
//     };
    
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?




// ------------------------------NESTED FUNCTION

// Nested functions
// PART I
// 1. Create a function named starWars that takes no parameter.
// 2. The function should declare a variable characters equal to an empty array
// 3. In the startWars function, create a function named createCharacter. 
// It receives two parameters, the first name and last name of a character. 
// If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// 4. In the startWars function, create a function named displayCharacter should display in the body the fullname of the characters,
// 5. Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once

// function starWars(){
//     let list =[];

//     function creatCharacter(fname, lname){
//        const fullName = fname + lname;
//        if(!fullName.lname){
//         fullName.lname = "Smith";
//     };
//        console.log(fullName);

//     };
//     creatCharacter("lola")
// }
// starWars()

// Second Part 

// 6. Change the starWars function, to take one parameter, the name of the spaceship the characters are in 
// 7. The displayCharacter function should now display in the body the fullname and spaceship of the characters 
// 8. Call the starWars function once with the spaceship "The Devastator", and another times with the spaceship 
// "Republic Attack Cruiser". what happens?



// ------------------------correction notes Ex1
function starWars(spaceship){
    const characters =[];

    function createCharacters(fname, lname="smith"){
        const fullName = `${fname} ${lname}`;
        characters.push(fullName);
        
    }

    function displayCharacters(){
        const getElem = document.querySelector("#listcharacters");
        characters.forEach((fullname) => {
            const li = document.createElement("li");
            const text = document.createTextNode(`${fullName} is in the ${spaceship}`);
            li.append(text);
            list.append(li);
        });
    };


createCharacters("lola");

// createCharacters("lola", "sunny");

displayCharacters()
}
// it shoudl have a default smith, so I put it in the parameter 