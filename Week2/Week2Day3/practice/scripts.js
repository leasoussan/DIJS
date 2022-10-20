
// For Loop



//     for (statement 1; statement 2; statement 3) {
//       // code block to be executed
//     }


// Statement 1: marks the start of a for loops
// Statement 2: defines the condition for executing the code block. Must return a boolean value.
// Statement 3: is executed (every time) after the code block has been executed.
// When the condition becomes false, the loop terminates, marking the end of its life cycle.

// PRACTICE
// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
//    it will check if the current number is odd or even, and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"

for (let i = 1; i <= 15; i++) {
    if(i %2 == 0){
    console.log("This is an even nummber we are OK ")
} else {
    console.log("Tthat's odd")
}
}



// . Write a JavaScript for loop that will go through the variable names.

//     if the item is not a string, pass.
//     if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.

// 2. Write a JavaScript for loop that will go through the variable names

//     if the item is not a string, go out of the loop.
//     if the item is a string, display it.
let names= ["john", "sarah", 23, "Rudolf",34]


for(i of names){
    if(typeof i == "string"){
        console.log(i.toUpperCase())
    }
  
}