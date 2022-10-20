// Exercise 1 : List of people
// Instructions

const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review about arrays

//     Write code to remove “Greg” from the people array.
people.shift(0)
console.log(people)

//     Write code to replace “James” to “Jason”.
const toDeleteUser = people.indexOf("James")

if (toDeleteUser !== -1) {
    people[toDeleteUser] = 'Jason';
    console.log(people)
}


//     Write code to add your name to the end of the people array.

people.push("lea")
console.log(people)
//     Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

m_index = people.indexOf('Mary')
console.log("Mari'\s index is" + m_index);

//     Write code to make a copy of the people array using the slice method.
//         The copy should NOT include “Mary” or your name.
//         Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//         Hint: Check out the documentation for the slice method

let newList = people.slice(1, -1)
console.log(newList);

//     Write code that gives the index of “Foo”. Why does it return -1 ?

let foo = people.indexOf('foo')
console.log(foo);
//     Create a variable called last which value is the last element of the array.
let last = people.slice(-1)
console.log(last);

//     Hint: What is the relationship between the index of the last element in the array and the length of the array?




// Part II - Loops

//     Using a loop, iterate through the people array and console.log each person.

//     Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
//     Hint: take a look at the break statement in the lesson.



for (pers of people) {
    console.log(pers)
}


for (pers of people) {
    console.log(pers);
    if (pers == "Jason") {
        break;
    }
}




// 🌟 Exercise 2 : Your favorite colors
// Instructions

//     Create an array called colors where the value is a list of your five favorite colors.
//     Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
//     Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//     Hint : create an array of suffixes to do the Bonus


const colors = ["Red", "Green", "Black", "white", "blue"]
const suffix = ["st", "nd", "rd", "th"]
// let index = colors.indexOf()

for (let c = 0; c <= colors.length - 1; c++) {



    console.log(`My ${c} choice, is ${colors[c]}`);
}

// for(let c in colors){
//     
//     // if(c == 1){
//     //     c = c+suffix[0];
//     //     continue; 

//     // }else if(c == 2){
//     //     c = c+suffix[1] ;
//     //     continue;
//     // }else if(c==3){
//     //     c = c+suffix[2];
//     //     continue;
//     // }else{
//     //     c= c+suffix[4];
//     //     continue;
//     // };

// console.log(`My ${c} choice, is ${colors[c]}`);
// }





// 🌟 Exercise 3 : Repeat the question
// Instructions

//     Prompt the user for a number.
//     Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

//     While the number is smaller than 10 continue asking the user for a new number.
//     Tip : Which while loop is more relevant for this situation?

// let answer= prompt("give me a number");

// while (answer < 10){
//     answer= prompt("give me a number");
// }


// 🌟 Exercise 4 : Building Management
// Instructions:

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}


// Review about objects


//     Console.log the number of floors in the building.
console.log(building["numberOfFloors"])

//     Console.log how many apartments are on the floors 1 and 3.
console.log("first Flor" + building["numberOfAptByFloor"]["firstFloor"], "Third Floor" + building["numberOfAptByFloor"]["thirdFloor"]);


//     Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log(building['nameOfTenants'][1] + " has " + building['numberOfRoomsAndRent']["dan"][0] + " rooms");

//     Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

saraRent = building['numberOfRoomsAndRent']["sarah"][1];
davidRent = building['numberOfRoomsAndRent']["david"][1];
danRent = building['numberOfRoomsAndRent']["dan"][1];
if (saraRent + davidRent > danRent) {
    danRent = 1200;
}
console.log("dans rent " + danRent);




// 🌟 Exercise 5 : Family
// Instructions

//     Create an object called family with a few key value pairs.
//     Using a for in loop, console.log the keys of the object.
//     Using a for in loop, console.log the values of the object.

const familly = {
    lastName: "Dupont",
    numerbPeople: "8",
    parentStatus: "married",
    liveInCity: "tel-aviv",
}
for (key in familly) {
    console.log(`${key}: ${familly[key]}`);
}


// Exercise 6 : Rudolf
// Instructions

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

//     Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

for(let key in details){
    if(details[key] == 'name'){
        details[key] = `My ${details[key]} is`;
    }
    if(details[key] == 'Rudolf'){
        details[key] = `${details[key]} The`;
    }
    console.log(details[key]);
}
// TODO:
// put in a lign 






// Exercise 7 : Secret Group
// Instructions

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

//     A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//     Hint: a string is an array of letters
//     Console.log the name of their secret society. The output should be “ABJKPS”
secretWord= []

for(x of names){
    secretWord += x.charAt(0)
    }
    

console.log(secretWord);


// SORTING TODO