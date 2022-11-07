// some(), filter(), map()forEach(), every(), find()> are all array methodes that are using a call back function  with 3 parameter 
// (element, index, array)

// const restaurant = ["200", "23", "24", "35"];
// const VAT = 1.17

// function addTax() {

// }


// const newPriceArray = restaurant.map((element) => element*VAT);
// // loop throught the restaurnat array and each loop we push element*VAT into a newarray 
// // MAP always return a NEW array.

// const student = [
//     {name:'Rhic',
//     score: 33,
//     },
//     {name:'peter',
//     score: 33,
//     },
//     {name:'lola',
//     score: 33,
//     },
// ]

// const studentList = student.map((element) => {
//     const NewScore = element.score+10;
//     return NewScore;
// })

// console.log(studentList);

// // auther option
// const studentListTwo = restaurant.map((element, index) => element*index)



// const test = () => {

// }
// function test(){

// }


// Exercise 1

// const famousPeople = [
//     {
//         name: "Angelina Jolie",
//         job: "actor",
//         age: 80
//     },
//     {
//         name: "Georges Clooney",
//         job: "actor",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         job: "actor",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         job: "singer",
//         age: 16
//     },
//     {
//         name: "Britney Spears",
//         job: "singer",
//         age: 100
//     }
// ]

// // Using the array above, use the map method, to create a new array that contains only the name of the people
// // Use the map method, to create a new array, that contains objects, each object contains the name of the actor, and it's job
// // BONUS: Using the array you get from question2, use the for each method, to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")
// const nameList = famousPeople.map((element) => element.name);
// // console.log(nameList);


// // >>review teacher
// // const getName = (element) => element.name;


// const professionList = famousPeople.map((element) => `${element.name} ${element.job}` )
// // console.log(professionList);

// // review teacher

// const profesionalListTwo = famousPeople.map((element) => {
//     const peopleObject ={
//         name:element["name"], 
//         job:element["job"],
//     };
//     return peopleObject;
//  })
// console.log("name and job", profesionalListTwo);

// //  in the map methode, what ever is returned is pushed to the array 

// profesionalListTwo.forEach((element) => {
//     const displayName = document.getElementById('list');
//     const li = document.createElement('li');
//     const textName = document.createTextNode(`${element.name} ${element.job}`);
//     li.appendChild(textName);
//     displayName.appendChild(li)
// })


// // >>review teacher
// const getName = (element) => element.name;



// // Exercise 2

// const studentsFootball = [
//  {name: 'Rich', score: 33}, 
//  {name: 'Peter', score: 55}
// ];

// // Create a new array of objects, containing the name, score and isAboveAverage if the students has a score bigger that 50, 
// // the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator
// // Result

// // const studentsNew = [
// //     {name: 'Rich', score: 33, isAboveAverage : false}, 
// //     {name: 'Peter', score: 55, isAboveAverage : true}
// // ];


// const footballStudentAverage = studentsFootball.map((element) => ({name:element.score, score: element.score, isAboveAverage: element.score<50 ? true : false }))
// // I dont realy need turneray operation as the condition already gives me a value 
// // const footballStudentAverage = studentsFootball.map((element) => ({name:element.score, score: element.score, isAboveAverage: element.score<50}))

// console.log((footballStudentAverage));



// const numbers =[2, 5, 8, 65, 21, 5 ];

// function addNumber(){
//     const biggerThanTen = [];
//     for(num of numbers){
//         if(num>10){
//             biggerThanTen.push(num)
//         }else{
//             continue;
//         };
        
//         };
//         console.log(biggerThanTen); 
//     }

//     addNumber()

// // FILTER>>>>>>>>>>>>>>>

// const numBiggerten = numbers.filter((element) => element>=10);
// console.log(numBiggerten);


// Exercise filter
// Exercise 1: create a new array that filters only the positive value
// const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
// const biggerNumbers = numbers.filter((element) => element>0);
// console.log(biggerNumbers);

// // Exercise 2: Suppose you have a list of Star Trek characters,
// // and you want to get just the characters that appeared in Star Trek: The Next Generation. 
// // Use filter() to filter the array of characters below

// const characters = [
//    { name: 'James T. Kirk', series: ['Star Trek'] },
//    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
//    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
//    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
// ]; 
// const starTreck = characters.filter((element) => element.series.includes('Star Trek: The Next Generation'))
// console.log(starTreck);



// // Exercise 3 NOT MANDATORY - send me the result by slack
// // Use the filter method to create an array without duplicates. The result should be ["blue","red","yellow"]

// const colors = ["blue", "red", "red", "blue", "yellow"]

// // const singleColor = colors.filter((element) => {
// //     const getColor =[];
// //     for(color in colors){
// //         if()
// //     }
// // } )



// >> REDUCE
// is used 
// reduce(previouse value, )
// const numbers = [10,20,30,40]

// const sum = numbers.reduce((accumulator, element) => {
//     console.log("accumulator", accumulator);
//     console.log("element", element);
//     const total = accumulator+element;
//     return total; 
// }, 1000)

// console.log(sum);



// const users = ["lea", "Sarah", "tom", "Leslie"]

// const secretSociety = users.reduce((accumulator, element) => {
//     console.log("accumulator",accumulator);
//     console.log("element", element);
//     const secretWord = accumulator+element[0];
//     return secretWord.toUpperCase();
//     }, "")

// console.log(secretSociety);


// Exercise 1
// Find the sum of the score of the students using reduce

const students = [
 	{name: 'Rich', score: 33}, 
 	{name: 'Peter', score: 55},
 	{name: 'John', score: 75},
];
const getTotal = students.reduce((accumulator, element) => {

    console.log("accumulatore", accumulator);
    console.log("element", element["score"]);
    const getScors  = accumulator+element["score"];
    console.log("getScrores", getScors);
    return getScors;
}, 0)
// in horder to be able to accumulate we need to start with initial value equal to 0

// const sum = student.rereduce((accumulator, element) => {



// Exercise 2
// Turn an array of voter objects into a count of how many people voted
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];


// const totalVots = voters.reduce((accumulator, element) => {
//     if(element.voted === true){
//         accumulator+= 1;
//     }else{
//         accumulator += 0
//     }
//     return accumulator;
//     // we have to return something with the reduced methode 
// }, 0)
// console.log(totalVots);

// other methode
// const totalVots = voters.reduce((accumulator, element) => {
//     return element.voted === accumulator+element.voted, 0;  
//     // or
//     // return element.voted === true ? accumulator += 1 : accumulator;  

//     // we have to return something with the reduced methode 
// }, 0)
// console.log(totalVots);



// DISCTRUCTURING

const colors = ["blue", "red", "orange"]
// to get the blue one
const favorit =colors[0];


const [firstFavorite, secondFavorit] = colors;
console.log("first Favorite", firstFavorite);
console.log("seconde Favorite", secondFavorit);

// doing two naming in the const declaration will automaticaly take in order the array element and create a special name for it in the array.
