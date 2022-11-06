// JSON


// const listEmploye = `{
//     "employees":[
//     {"name":"John", "lastname":"Smith"},
//     {"name":"Ron", "lastname":"Backer"},
//     ]
// }`


// const listEmployeObject = JSON.parse(listEmploye)
// // here i convert the Jsont list into an object 
// console.log(listEmployeObject);





// // converting a JS object into JSON 
// const family ={
//     memebr:2,
//     lastName:"smith"
// }
// const familyJson = JSON.stringify(family) TO JSON

// you can also use Json to clone objects


// const shopping = ["chokolate", "vanila", ["apple", "banana"]];
// // cloining the array 

// const paid = [...shopping]
// shoping[0]="caramel"
// console.log(shopping); //["caramel", "vanila", ["apple", "banana"]]
// console.log(paid); //["chokolate", "vanila", ["apple", "banana"]]

// shoping[2][1]="pear"
// console.log(shopping); //["caramel", "vanila", ["pear", "banana"]]
// console.log(paid); //["chokolate", "vanila", ["pear", "banana"]]

// // deep clone with JSNON
// // first stringinf the arry 
// // seconde reparse the strigify 
// const paidTwo =JSON.parse(JSON.stringify(shoping))

// PARSE if from Json to JS




// // --------------------------
// const familyOne ={
//     memeber:2,
//     lastName:"smith",
//     friends:{
//         first:"john",
//         second:"tom"
//     }
// }
// const myFamily = {...familyOne}

// myFamily.lastname = "sousssan"




// let jsonString = `
// {
//     "quiz": {
//         "sport": {
//             "q1": {
//                 "question": "Which one is correct team name in NBA?",
//                 "options": [
//                     "New York Bulls",
//                     "Los Angeles Kings",
//                     "Golden State Warriros",
//                     "Huston Rocket"
//                 ],
//                 "answer": "Huston Rocket"
//             }
//         },
//         "maths": {
//             "q1": {
//                 "question": "5 + 7 = ?",
//                 "options": [
//                     10,
//                     11,
//                     12,
//                     13
//                 ],
//                 "answer": 12
//             },
//             "q2": {
//                 "question": "12 - 8 = ?",
//                 "options": [
//                     1,
//                     2,
//                     3,
//                     4
//                 ],
//                 "answer": 4
//             }
//         }
//     }
// }`

// // / Exercise with JSON
// // Parse this JSON string into a JS object
// // Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// // Create another variable to stringify the JS object. Console.log the variable
// // Then use pretty print (look at the lesson)

// const game = JSON.parse(jsonString)
// // console.log("JS OBJECT",getJstonTOObject);

// // to show allt he opition i hav to DIG inthe Object
// // name of oject > quize >q1>options
// const options =game.quiz.sport.q1.options;

// options.forEach(element => console.log(element));
// console.log("test", getQuestionsOptions);


// // in order to do a preety print of the JSON 
// // stringify(value, replacer, sapece) >> has 3 argument
// const backToJason = JSON.stringify(game, null,2)
// // to get a better print


// ----------------------------------------------------------

// // excercice class for try catch 

// // Exercise 1: exceptions
// // Using the code below:
// const someVar = 'Cannot be reassigned';
// try {
//   someVar = 'Still going to try';
// } catch(e) {
//   console.log(e);
// }

// console.log("after")
// // Which type of error will be thrown ? Look on the different types errors on Google >>>>  Cant Reasigne 
// // Is the console.log("after") will be shown on the console ? yes becasue the try catch 


// EX2
// Write a function called checkEmail that takes one parameter: the email of the user.
// Your function should return "You are signed in". However, if the email doesn't contain @ you should throw the error, "Missing @ in the email." (edited) 

// function checkEmail(email){
//     try{
//         const userEmailCheck = email.inclued('@');
//         if(userEmailCheck === true){
//             alert("you are signed in, yay");
//         }else{
//             alert("this is not an email yo!")
//         }
//     }
//     catch (er){
//         alert("sorry soemthing went wrong")
//     }
// }

// checkEmail("losaf@sdfds")


// CORRECTION

function checkEmail(email){
    try{
        if(email.includes("@")){
            alert("yaya you are in!")
        }else{
            throw new Error("missing a@")
        }
    } catch (err){
    console.log("this is after in the arreor", err.message);
    }

}

// checkEmail("sdfasdfsa@sdf.com")
checkEmail("sdfasdfsasdf.com")