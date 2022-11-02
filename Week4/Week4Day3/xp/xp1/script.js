// Exercise 1 : Analyzing
// Instructions

//     Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// ANSWER> 

// results=
['carrot', 'potato', 'bread']["apple", "orange", "chicken"]
// results Array(6) [ "bread", "carrot", "potato", "chicken", "apple", "orange" ]


// // ------2------
const country = "USA";
console.log([...country]);

// "USA"
// "U"."S"."A"


// // ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// results>
// predicted: ,,
// correction: undefined