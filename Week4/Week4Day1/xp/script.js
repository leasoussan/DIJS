// Exercise 1 : Scope
// Instructions

//     Analyse the code below, and predict what will be the value of a in all the following functions.
//     Write your prediction as comments in a js file. Explain your predictions.

// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// with const instead of let ?

//#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// };

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// };

// // #2.1 - run in the console:
// funcThree();
// // funcTwo();
// funcThree();
// #2.2 What will happen if the variable is declared 
// with const instead of let ?


// //#3
// function funcFour() {
//     window.a = "hello";
// };


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// };

// // #3.1 - run in the console:
// // funcFour();
// funcFive()

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?




// -----------------------------xp2
// Exercise 2 : Ternary operator
// Instructions

// Using the code below:

// function winBattle(){
//         return true;
//     }
// ANSWER>>

// const winBattle = () => true;

// let experiencePoints = (winBattle() === true) ?  () => 10 : 1;
// const experiencePoints = function(){
//     if(winBattle()== true){
//         experiencePoints = 10;
//     }else{
//         experiencePoints = 1;
//     };
// }

// console.log(experiencePoints);



// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. 
// If winBattle() is true, the experiencePoints variable should be equal to 10, 
// else the variable should be equal to 1.
// Console.log the experiencePoints variable.



//     Exercise 3 : Is it a string ?
// Instructions

//     Write a JavaScript arrow function that checks whether 
// the value of the argument passed, is a string or not. Use ternary operator
//     Check out the example below to see the expected output

// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


// ANSWER>>
// const checkString = (input) => typeof input=="string" ? true : false;

// console.log(checkString("oiu"));

// -----Ex 4--------------------------------------

// Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//     Write a JavaScript program that displays the colors in the following order 
// : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
//     Check if at least one element of the array is equal to the value “Violet”. 
// If yes, console.log("Yeah"), else console.log("No...")
//     Hint : Use the array methods taught in class. Look at the lesson Array Methods.


// ANSWER>>

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((element, index) => console.log(`${index + 1}# choice is ${element}`))

// console.log(colors.some((element) => element == "Violet"));



// // Exercise 5 : Colors #2
// // Instructions

// // Using these arrays :

// // const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// //     Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
//     Hint : Use the array methods taught in class and ternary operator.


// colors.forEach((element, index) => {
//     const sentence = element==0 ? `${index+1}+${ordinal[1]}` :  ;
//     return sentence
// }) 

// const preferedColor = function (colors, ordinal) {
//     colors.forEach((element, index) => {
//         if(element.index==0){
//             element[index+1] += ordinal[1]
//         }
//         const sentence = `${index + 1} ${ordinalChoice} choice is${element}`
//     });
// }


// Exercise 6 : Bank Details
// Instructions

// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

    // Create a global variable called bankAmount which value is the amount of money currently in your account.
    // Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
    // Create an array with all your monthly expenses, both positive and negative (money made and money spent).
    // Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
    // Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
    // Display your current bankAccount standing at the end of the month.

let bankAmount = 100000;
const israelVat = 1.17;

const details= ["+600","+100", "-1260", "+4600", "-5600", "+6520", "-900" ]

// details.forEach((element) => console.log(element*israelVat));


// details.forEach((element) => element[0]=="+" ? element += bankAmount : element -= bankAmount)

function bankBalance(details){
    for(let i=0; i<details.length; i++){
        let singleAmount = details[i][0];
        // console.log(singleAmount);
        if(singleAmount == "+"){
            singleAmount =='';
            i += bankAmount;
            return bankAmount;

        }else{
            singleAmount =='';
        }   i -= bankAmount;
            return bankAmount;
        };
        // let getValue = details[i][0]=="+" ? details[i] += bankAmount : details[i] -= bankAmount
    }

bankBalance(bankAmount)