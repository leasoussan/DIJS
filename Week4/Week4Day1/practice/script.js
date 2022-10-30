//function declaration

getPrice(2,5);

function getPrice(a, b){
    const total = a + b
}

getPrice(2,5);

//function expression not hoisted
// getPrice(2,5); //no possible

// function expression
// anonymous function assigned to a variable

const getPriceSecond = function (a, b) {
    const total = a + b;
}

getPriceSecond(2,5);


//Function expression are useful as callback functions
const btn = document.getElementById("btn");
btn.addEventListener("click", sayHi);
btnTwo.addEventListener("click", sayHi);

function sayHi () {

}

//other way
btn.addEventListener("click", function(){
    alert("hello")
});

setTimeout(function(){
    alert("hello")
}, 2000)

//base for arrow function

//function expression  - anonymous function
function (a, b) {
    const total = a + b;
    return total;
}

//ANONYMOUS ARROW FUNCTION
(a,b) => {
    const total = a + b;
    return total;
}

//power of arrow function is that it returns automatically a value
(a,b) => a + b

//the arrow function returns a + b
const getPriceThird = (a,b) => a + b;

getPriceThird(2,4)

//no parameter
const getPrice31 = () => "hello";

//no parameter
const getPrice32 = a => a;

// if the function does more than just returningm you need the 
// curly brackets and the return keyword
const getPrice33 = (a,b) => {
    const sentence = `Hello we are doing some math`;
    const total = a+b;
    return total;
}

// ---------------------------------
// Transform a function declaration into a function expression
function makeChocolate (typeChocolate) {
    const niceChocolate = `${typeChocolate} chocolate with strawberry`;
    return niceChocolate; //give to the function makeChocolate a result
    //the result is the value of this variable : niceChocolate
}

//function expression
const makeChocolate = (typeChocolate) => {
    const niceChocolate = `${typeChocolate} chocolate with strawberry`;
    return niceChocolate; 
}

//function expression with an arrow function
const makeChocolate = (typeChocolate) => `${typeChocolate} chocolate with strawberry`


btn.addEventListener("click", () => alert("hello"));


// Ternary operator
// SYNTAX
// condition ? true go here : false go here

//function declaration
function checkTemperature (temp) {
    const season = temp>20 ? "Summer" : "Winter";
    return season;

}

checkTemperature(25)


const checkTemperature = (temp) => temp>20 ? "Summer" : "Winter";
checkTemperature(25)



//function expression
const checkTemperature = function (temp) {
    if(temp>20){
        return "Summer"
    } else {
        return "Winter"
    }
}

//arrow function
const checkTemperature = (temp) => {
    if(temp>20){
        return "Summer"
    } else {
        return "Winter"
    }
}



// -----------------------------------------------------MY NOTES

// function makeChocolate(typeofChocolate){
//     const niceChocolate = `${typeofChocolate} chocolate with Strawberry`;
//     return niceChocolate
// }

// // typeofChocolate = parameter
// // argument
// makeChocolate("white")


// function makeBuscuits(){
//     const type = makeChocolate("white"); 
//     const sentence =`im making${typeofChocolate} chocolate`;
//     console.log(sentence);
// }
// here we have 2 function the second function need a variable from the first one, so we return and call it




// function hotelVacation(hotelprice){
//     const totalHotel = hotelprice+100;
//     carVacation(1000, totalHotel)
// }

// function carVacation(carPrice, hotelprice){
//     const totalCar = carPrice+100

// }

// here we dont want to return anythoing we call a function hotel vacation - creating a variable total hotel - inside the function we call another function of the car vacation
//  we are passing as argument the value of the variable hotel price


// the first step of code is creation-saving the variables , 
// then execution - memory is created first so the first lines is executed first 




// // -----------------------
// // Exercise 1 : guess what will be console logged, and explain why
// let text = "Hello";

// function checkText (){
// 	console.log("In the function",text); 
// 	text += " World";
// 	console.log("Still in the function",text);
// }

// console.log("before the function", text);
// // =hello - because out of function

// checkText()
// // inthe function hello;
// // hello world
// // still in the function hello 

// console.log("after the function", text);
// // hello world
// // because text is reassigned and not redeclared 




// // Exercise 2 : guess what will be console logged, and explain why
// let friend = "Harry";

// function checkfriend (){
// 	let friend = "Alice";
// 	console.log("In the function",friend); 
// 	friend += " Smith";
// 	console.log("Still in the function",friend);
// }

// console.log("before the function", friend);
// // harry 

// checkfriend()
// // in thr function

// console.log("after the function", friend);
// // harry




// ----EX class 2
// Exercise 1:

// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
// function greatUser(name){
//     return `Hello ${name}`;

// }
// console.log(greatUser("lea"));

// // then function expression,
// const helloUser = function(f_name) {
//     return `Hello ${f_name}`;
// };
// console.log(helloUser("luna")) ;

// // then arrow function

// const salutUser = (surname)=> {alert(`hello ${surname}`)};

// salutUser("lee"); 


// Exercise 2: Function & Arrow function & Ternary Operator

// Check if the user's age is higher than 18. Use ternary operator.
// if the user's age is higher than 18, return "You can drive"
// else, return "You cannot drive"
// Do this exercise,

// first by using function declarations
// function checkAge(age){
//     const results = age>18 ? "you can Drive" : "you cant drive yet";
//     console.log(results);
//     return results
     
// }
// checkAge(17);
// checkAge(21);

// // then function expression,
// // then arrow function

// const CheckDriver = function(age) {
//     return age>18 ? "you can Drive" : "you cant drive yet";
// }

// const CheckDriver = (age) => age>18 ? "you can Drive" : "you cant drive yet";
// CheckDriver(15)


// classmate.forEach((element, index) => {element}
    
// });