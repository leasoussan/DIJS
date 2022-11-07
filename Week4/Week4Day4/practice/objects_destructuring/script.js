const address = {
    street: 'Evergreen Terrace',
    number: 742,
    city: 'Springfield',
    state: ['NT', 'AB'],
    zip: '49007',
};

const adressNumber = address.number
// SAME AS
// const adressNumber = adress["number"]

// -----------------
// //object destructuring
// ---------------
// create 2 variables named street and city that are equal to the 
// values of the keys street and city

const {street, city} = address;
console.log(street); //value of the street key : 'Evergreen Terrace' 

// create variable with different names
const {street : streetUser, city : cityUser, number, state} = address;
console.log("streetUser", streetUser , "cityUser", cityUser);
const sentence = `I live in ${cityUser} at the street ${streetUser}`

// the same
// const streetUser = address.street
// const streetUser = 'Evergreen Terrace'

// // //array destructuring
const colors = ["yellow", "blue"]
const [first, second] = colors
// the same
// const first = colors[0]


// in a function
const addressTwo = {
    street: 'Evergreen Terrace',
    number: 742,
    city: 'Springfield',
    state: ['NT', 'AB'],
    zip: '49007',
};

// // //same result
function test (userAdress) {
    const sentence = `I live in ${userAdress.city} at the number ${userAdress.number}`
}

test(addressTwo)

// // //same
function testOne (userAdress) {
    const {city, number} = userAdress;
    const sentence = `I live in ${city} at the number ${number}`
}

testOne(addressTwo)

//same
function testTwo ({city : cityUser, number : numberUser}) {
    const sentence = `I live in ${cityUser} at the number ${numberUser}`;
    console.log(sentence);
}

testTwo(addressTwo)

// ----------------------------

const addressThree = {
    street: 'Evergreen Terrace',
    number: 742,
    city: 'Springfield',
    state: ['NT', 'AB'],
    zip: '49007',
};

// // //unpacking the value - spread
const myAdress = {firstname : "John", ...addressThree}

const shopping = {
    apple: 2,
    banana: 5
}

const paid = shopping; //point to the same reference

console.log(shopping); 
//{
//     apple: 2,
//     banana: 5
// }
console.log(paid);
// {
//     apple: 2,
//     banana: 5
// }

paid.apple = 3;
console.log(shopping); 
//{
//     apple: 3,
//     banana: 5
// }
console.log(paid);
// {
//     apple: 3,
//     banana: 5
// }

//CLONING THE OBJECT
const shoppingTwo = {
    apple: 2,
    banana: 5
}

const paidTwo = {...shoppingTwo}; 

console.log(shoppingTwo); 
//{
//     apple: 2,
//     banana: 5
// }
console.log(paidTwo);
// {
//     apple: 2,
//     banana: 5
// }

paidTwo.apple = 3;
console.log(shoppingTwo); 
//{
//     apple: 2,
//     banana: 5
// }
console.log(paidTwo);
// {
//     apple: 3,
//     banana: 5
// }

//SHALLOW COPY
const shoppingThree = {
    apple: 2,
    banana: 5,
    details : {
        more : 4,
    }
}

const paidThree = {...shoppingThree}; 

console.log(shoppingThree); 
//{
//     apple: 2,
//     banana: 5
    // details : {
    //     more : 4,
    // }
// }
console.log(paidThree);
// {
//     apple: 2,
//     banana: 5
// details : {
//     more : 4,
// }
// }

paidThree.details.more = 10;
console.log(shoppingThree); 
// {
//     apple: 2,
//     banana: 5
// details : {
//     more : 10,
// }
// }
console.log(paidThree);
// // // {
// // //     apple: 2,
// //     banana: 5
// // details : {
// //     more : 10,
// // }
// // }

const shoppingFour = {
    apple: 2,
    banana: 5,
    fruits : ["a", "b"],
    details : {
        more : 4,
    }
}

const {apple, details : {more}} = shoppingFour
// i have 2 variable apple, and more
console.log(apple); //2
console.log(more); //4

const {fruits} = shoppingFour
console.log(fruits); // ['a', 'b']

const {fruits : [fs, sd]} = shoppingFour
console.log(fs); "a"
console.log(sd); "b"