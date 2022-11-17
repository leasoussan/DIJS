// // #1
// const nums = [3, 7, 10]
// // lea's PREDICTION:  nums[1]
// // console.log(nums[1])
// // =7
// // GOOD RESULTS

// // #2
// const arrNums = [1, 2, 3, 4, 5];
// arrNums.splice(2, 0)
// // console.log(arrNums)
// // > NOTHING happends as at position 2 we have 0 replacement, and no addition 
// // NOT GOOD RESULTS


// // #3
// const bestNumbers = [1, 2, 3]
// const secondBestNumbers = [7, 8, 9]

// const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
// // console.log(favoriteNumbers)
// // WILL PRINT 4,5,6,1,2,3,7,8,9
// //GOOD RESULTS


// // #4
// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// football.clubs.spain = "Real Madrid";
//   console.log(football.clubs.spain);

// //  lea PRINT Real Madrid
// // Good results 


// #5
// const myteam = "bestTeam";

// const football = {
//   type: "sport",
//   clubs: {
//     france : "Paris Saint-Germain",
//     spain : "Atlético Madrid",
//   }
// }  

// football.clubs[myteam] = "France national football team";
// console.log(football.clubs);
// PREDICTION:
// clubs: {
//     france : "Paris Saint-Germain",
//     spain : "Atlético Madrid",
//     myteam : "France national football team"
//   }

// //ANSWER {france: 'Paris Saint-Germain', spain: 'Real Madrid', bestTeam: 'France national football team'}
// // I missed the variable change into myteam


// // #6
// // const x = function(a, b){
// //     return a*b;
// //  }
// // console.log(x(2,4));
// //  ANSWER we can write a function like this it's an anonymouse function called x
// // we will invoke it when calling the variable x(a,b), or doing action on it

// // >> function expression - when a variable is equal to a function 


// // #7
// function x() {
//     a = 5;
// }
// // ANSWER not true ; ant thing inside a function stays in the local scoop


// // #8 
// function sayHello() {
//     return "Hello, ";
// }
// function greeting(helloMessage, name) {
//     console.log(helloMessage() + name);
// }
// greeting(sayHello, "JavaScript!");

// //  response log: Hello Javascript
// // GOOD ANSWER


// // #9
// // function sum(num1, num2){
// //     return num1 + num2
// // };

// const sum = (num1, num2) => num1 + num2;


// sum(40, 2)
// sum(42, 0)
// // console.log("the answer to everything is", sum(42,0))

// // LEA ANSWER - not fluide here ......
// // I looked up arrow function :)


// // #10
// function foo() {
//     function bar() {
//         return "Poppin' bottles";
//     }
//     return bar();
// }

// console.log(foo());

// //   1. i thought it will print the function as there are () it will print the function first answer
// // 2/ but if it's not printing the function - it will got to foo . start with BAR - returns something -0 but then will call the function bar to print Pooping bottles 



// // #11
// // Which of the following events will you add in the addEventListener()method? ☐ click ☐ onclick

// // > will add ("click")
// // in the html tag i put onclick


// // #12
// // Does the addEventListener() method allow you to add many events to the same element?
// // >>> YES


// // #13


// // Part I : Create a button in your HTML page, 
// // when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions.


// const addPara = (event) => {
//     const getContainer = event.target.nextElementSibling
//     const createP = document.createElement('p');
//     createP.textContent = "New Paragraphe";
//     getContainer.appendChild(createP);
//     createP.addEventListener('mouseover', colorIt)
// }

// const colorIt = (event) => {
//     const getBox = event.target;
//     getBox.style.backgroundColor = 'red'
//     console.log(getBox);
//     // console.log(event);
// }


// const getButton = document.querySelector('.btn_event')
// getButton.addEventListener('click', addPara)

// // Part II : Add to each new paragraph, an event listener of mouse over. 
// // When you hover on a paragraph, the paragraph should become red (ie. color of the text).


// // 14#
// // Array Methods : forEach, map, filter, reduce, find, every, some

// // Do this exercise twice: first with a for loop, then with a for of loop. Console.log the sum of this array

// const marks = [67, 60, 89, 90, 67, 42];

// function getSum(list) {
//     let getTotal =0;
//     for(let i=0; i< list.length; i++) {
//         // console.log(list[i]);
//         getTotal += list[i];
//     };
//     console.log(getTotal)

// }


// // getSum(marks)
// // // here I many time forget the element and i diff/

// function getSumTwo(list){
//     let getTotal = 0;
//     for(let number of list){
//         getTotal += number;
//     }
//     console.log(getTotal)
//     return getTotal;
// }
// getSumTwo(marks)

// // >>>DIFFICULITES HERE 

// // 15#
// // What is the value of passed in the following code?

// const marks = [67, 60, 89, 90, 67, 42];

// const passed = marks.every(function(m) {
//    return m >= 50;
// });
// console.log(passed);
// // false 
// // >> GOOD ANSWER AS WE HAVE number 42 


// // #16
// // What does the following code log?

// const numsx = [10, 50, 88];

// const bignums = numsx.filter(function(n) {
//   return n > 10;
// });

// console.log(bignums);
// // lea answer [50,88] GOOD ANSWER


// // 17
// // Use a javascript array method to square the value of every element in the array.

// const input = [ 1, 2, 3, 4, 5 ];
// input.forEach(element => {
//     const squareN = Math.pow(element, 2);
//     console.log(squareN);
//     },
// );

// // or
// // input.forEach(element => {
// //     const square = (element) => element ** 2;
// //     console.log(square);
// //     },
// // );

// console.log(input) // [ 1, 4, 9, 16, 25]




// // 18
// // Use 2 javascript array methods and chain them to return the sum of all the positives ones.

// const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
// const filter = secondInput.filter((ele) => ele>=0)
// let total = filter.reduce((accumulator, currentValue)=> accumulator + currentValue) 
// // console.log(total) //42
// //  I had to look the reduce method again


// // 19#

// // Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

// let input = 'George Raymond Richard Martin';
// const newInput = input.split(' ');
// let initial = []
// newInput.forEach(element => {
//     const getLetter = element.charAt(0);
//     initial += getLetter;
//     return;
// }  
// );

// // const input = 'George Raymond Richard Martin';
// // HELP?? HOW TO GET THIS with A CONST 
// // console.log(newInput);
// // console.log(initial)//'GRRM'

// // GOOD ANSWER - would like to get an option for const


// // 20#

// // Object and Classes

// // How objects are passed to a function in JavaScript? By Value or By Reference ? Explain in detail, using the below example:

// function changeTshirt (myshirt){
//     console.log("myshirt", myshirt);
//     myshirt.color = "red"
//     console.log("myshirt", myshirt); //this is the parameter
//     console.log("tshirt", tshirt);   //this is the global variable
// }


// // const tshirt = {
// // color : "blue",
// // price : 10
// // }

// // they are  passed by >> reference (lea's answer) 
// // changeTshirt(tshirt)
// // changeTshirt is function who is referencing to a paramenter 
// // the parameter will replace it with what we give it

// // same for tshirt its 


// 21#

// // How would you change the code above, so that when you modify the key color from the parameter myshirt, 
// // it won't change the global variable tshirt ?

//     // const changeColor = myshirt.color = "red" // i ll put it under a variable 


// // 22
// // Use object destructuring to retrieve the value of the keys france and spain

// const football = {
//  type: "sport",
//  clubs: {
//    france : "Paris Saint-Germain",
//    spain : "Atlético Madrid",
//  },
// };

// const {type, clubs} = football
// console.log(type);
// console.log("here", clubs['france'], clubs['spain']);

// // Lea comment i  knew the destruction but for some resons i wanted to put ... before clubs and it fdoesnt work
// // i looked up destructuring



// 23
// Use object destructuring in the function to retrieve the value of the keys france and spain

const football = {
    type: "sport",
    clubs: {
      france : "Paris Saint-Germain",
      spain : "Atlético Madrid",
    }
   }  


function retrieveSports({clubs:{france : franceTeam}, clubs:{spain : spainTeam}}) {

const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
console.log(sentence);
}


retrieveSports(football)

// // 24
// // What will be printed in the console

// class Item {
// constructor(nameProduct, priceProduct) { 
//      this.name = nameProduct;
//      this.price = priceProduct;
// }

// displayInfo () {
//     console.log(this.name + " is for $ " + this.price)
// }
// } 

// const cake = new Item("Chocolate Cake", 10);
// cake.displayInfo();
// // PREDICTION: 
// // Chocolade cake if for 10 dollars 

// // GOOD ANSWER

// // Promises

// // 25
// // What will be the output and why ? What will be the state of the promise ?

// Promise.resolve('Success!')
// .then(data => {
// return data.toUpperCase()
// })
// .then(data => {
// console.log(data)
// })

// // Promis will be fullfild and log will be: !


// // 26
// // What will be displayed by the following code, after 2 seconds?

// const p = new Promise(function(resolve, reject) {
// setTimeout(function() {
//   resolve("OK");
// }, 2000);
// });

// p.then().then(function(data) {
// console.log(data);
// });

// // ANSWER OK
// // I was right but not so sure why


// 27
// Consider the following async function and its output. 
// What will be displayed to the console when calling the test() function? Explain the process

// async function test() {
// let result = 'first!';
// const promise = new Promise((resolve, reject) => { // we have a promis that will try to be resolved - timer is set work out
// setTimeout(() => resolve('done!'), 1000);
// });

// result = await promise;// here the result is beeing set again to wait for the promis therefor the first wont print

// console.log(result);
// }

// test();
// // 'done '


// 28 --- see fetch.js

// BONUS

// Welcome to the space station! It is your first day onboard and as the newest and most junior member of the crew, you have been asked to organize the library of manuals and fun novels for the crew to read.

// Headquarters have asked that you store the following information about each book.

// The title
// The author
// Creation date
// The number of pages
// The number of times the book has been read.
// If the book was thrown away (boolean)

// Headquarters also needs you to track certain actions that you must perform when books get out of date.

// First, a book can be read, everytime this method is called, the number of times the book was read is inscreased by 1
// First, for a manual, the book must be thrown out if it is over 5 years old.
// Second, for a novel, the book should be thrown out if it has been checked out over 100 times.

// Construct three classes that hold the information needed by headquarters as properties.

// One class should be a Book class
// and two child classes of the Book class called Manual and Novel.
// Each class will contain two methods.
// One will be a constructor.
// The other one will either be in charge of disposal of the book or updating the property related to the number of times a book has been checked out.

// Hint: This means you need to read through the requirements for the problem and decide what should belong to Book and what should belong to the Novel and Manual classes.

// Declare an object of the Novel class for the following tome from the library:

// VARIABLE 	VALUE
// Title 	Top Secret Shuttle Building Manual
// Author 	Redacted
// Creation date 	2013
// Number of pages 	1147
// Number of times the book was read 	1
// If the book was thrown away 	No

// Declare an object of the Manual class for the following tome from the library:


// VARIABLE 	VALUE
// Title 	Pride and Prejudice
// Author 	Jane Austen
// Creation date 	1813
// Number of pages 	432
// Number of times the book was read 	32
// If the book was thrown away 	No

// One of the above books needs to be discarded. Call the appropriate method for that book to update the property. That way the crew can throw it into empty space to become debris.

// The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number of times the book has been checked out.
