// Exercise 1: Your favorite food
// Instructions

//     Store your favorite food into a variable.

//     Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

//     Console.log I eat <favorite food> at every <favorite meal>

let favoritFood = "My chimiChuri"
let favoritMeal = "dinner"
let mySentence = `I love to eat ${favoritFood}, at ${favoritMeal}`

console.log("i love to eat " + favoritFood + " At " + favoritMeal)

console.log("second sentence :", mySentence)




// Series
// Instructions
// Part I

// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

//     Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

//     Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
//     For example : black mirror, money heist, and the big bang theory

//     Console.log a sentence using both of the variables created above
//     For example : I watched 3 series : black mirror, money heist, and the big bang theory


// Part II

//     Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
//     Add, at the end of the array, the name of another series you watched.
//     Add, at the beginning of the array, the name of your favorite series.
//     Delete the series “black mirror”.
//     Console.log the third letter of the series “money heist”.
//     Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

const myWatchedSeries = ["black mirror", " money heist", " the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length
console.log(myWatchedSeriesLength)


const myWatchedSeriesSentence = `${myWatchedSeries}`
console.log("I watched " + myWatchedSeriesLength + " series: " + myWatchedSeries)

myWatchedSeries[2] = "friends"
 
myWatchedSeries.push("jane the V")

console.log(myWatchedSeries)

// SPLICE: (location ion indexedDB, how many to delete, and what to add)
// here at position 0 i want to delete 0 and add "nY Special Unit" 

myWatchedSeries.splice(0,0,   "NY special Unit")

console.log(myWatchedSeries)

let toDelete = myWatchedSeries.indexOf("black mirror")

console.log("to delete", toDelete)
myWatchedSeries.splice(toDelete,1)
// or ?
// myWatchedSeries.slice(toDelete)

console.log("newlist", myWatchedSeries)

let movieIndex = myWatchedSeries.indexOf(" money heist")
console.log("the movie 3rdLetter", movieIndex)

console.log("the letter is", movieIndex[2]);






// Exercise 3 : The temperature converter
// Instructions

//     Store a celsius temperature into a variable.

//     Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
//     Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
//     Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let temperature = prompt("What's the temperaure in Celcius")

let tempConverter = temperature /5 *9 + 32

console.log(temperature + " C , is " + tempConverter +"F")



// EX 4:


// Using the code below:

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
//     // Prediction: 34+21 = 55
//     // Actual:  55

    a = 2;

    console.log(a+b) //second expression
//     // Prediction: 21+2 = 23
//     // Actual:23


//     What will be the outcome of a + b in the first expression ?

55

//     What will be the outcome of a + b in the second expression ?
23
//     What is the value of c?

// undefined
//     Analyse the code below, what will be the outcome?

console.log(3 + 4 + '5');
// 75







// -------------
// Exercise 5 : Guess the answers #2
// Instructions

// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


// For example

// typeof("potato")
// // Prediction: Vegetable
// // Actual: String


//     What is the output of each of the expressions below?


typeof(15)
// Prediction: number
// Actual:

typeof(5.5)
// Prediction: float
// Actual:

// typeof(NaN) 
// Prediction:undefined
// Actual:

typeof("hello")
// Prediction: string
// Actual:

typeof(true) 
// Prediction : boolean
// Actual:

typeof(1 != 2)
// Prediction: boolean
// Actual:

"hamburger" + "s"
// Prediction: hamburgers
// Actual:

"hamburgers" - "s"
// Prediction: hamburgers
// Actual: Nan

"1" + "3"
// Prediction: 13
// Actual:

"1" - "3"
// Prediction: 13
// Actual:
-2
"johnny" + 5
// Prediction:johnny5
// Actual:

"johnny" - 5
// Prediction: 
// Actual: undefined

99 * "hello"
// Prediction: error
// Actual: nan

1 != 1
// Prediction: FALSE boolean
// Actual: false

1 == "1"
// Prediction: TRUE BOOLEAN
// Actual: true

1 === "1"  
// Prediction: FALSE Boolean
// Actual: false








// ---------
// Exercise 6 : Guess the answers #3
// Instructions

// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


//     What is the output of each of the expressions below?


5 + "34"
// Prediction:534
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction:2
// Actual:

5 % 10
// Prediction: 0.5
// Actual:

"Java" + "Script"
// Prediction: javascript
// Actual:

" " + " "
// Prediction:Nan
// Actual:

" " + 0
// Prediction: 0 
// Actual:

true + true
// Prediction: 2
// Actual: 2

true + false 
// Prediction: false
// Actual: 1 - true

false + true 
// Prediction: true
// Actual: 1

false - true
// Prediction: nan
// Actual: -1

!true
// Prediction: nan
// Actual: False

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: nan
// Actual: nan

