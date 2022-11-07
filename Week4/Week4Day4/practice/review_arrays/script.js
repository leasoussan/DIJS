//destructuring
const colors = ["yellow", "blue", "red", "black"];
const [first, second, third] = colors;

//same as
// const first = colors[0]
// const second = colors[1]

// create 3 variable
// the value of the variable first is yellow
// the value of the variable second is blue
// the value of the variable third is red

//Rest - packing values into an array
const [fs, sd, ...td] = ["yellow", "blue", "red", "black"];
// the value of the variable fs is yellow
// the value of the variable sd is blue
// the value of the variable td is ["red", "black"]

//Spread - unpacking values from an array
const colorsTwo = ["yellow", "blue", "red", "black"];
const favorite = ["pink", ...colorsTwo];

// colorsTwo : ["yellow", "blue", "red", "black"];
// favorite : ["pink", "yellow", "blue", "red", "black"];


const shopping = ["chocolate", "vanilla"];
const paid = shopping;

//paid and shopping are 2 variable pointing to the same reference in the HEAP
console.log(shopping); //["chocolate", "vanilla"];
console.log(paid); //["chocolate", "vanilla"];

shopping.push("apple");
console.log(shopping); //["chocolate", "vanilla", "apple"];
console.log(paid); //["chocolate", "vanilla", "apple"];

paid.push("banana");
console.log(shopping); //["chocolate", "vanilla", "apple", "banana"];
console.log(paid); //["chocolate", "vanilla", "apple", "banana"];

//spread to clone arrays : SHALLOW COPY
const shoppingTwo = ["chocolate", "vanilla"];
const paidTwo = [...shoppingTwo];

console.log(shoppingTwo); //["chocolate", "vanilla"];
console.log(paidTwo); //["chocolate", "vanilla"];

paidTwo === shoppingTwo
// false because we don't point to the same reference

shoppingTwo.push("apple");
console.log(shoppingTwo); //["chocolate", "vanilla", "apple"];
console.log(paidTwo); //["chocolate", "vanilla"];

paidTwo.push("banana");
console.log(shoppingTwo); //["chocolate", "vanilla", "apple"];
console.log(paidTwo); //["chocolate", "vanilla", "banana"];

//SPREAD : the ... before an array --> unpack values
//REST : the ... before an value or a variable --> pack values to the variable


//nested array
// cloning - spread operator
const shoppingThree = ["chocolate", "vanilla", ["apple", "banana"]];
const paidThree = [...shoppingThree];

paidThree[2].push("pear")
console.log(shoppingThree); //["chocolate", "vanilla", ["apple", "banana", "pear"]];
console.log(paidThree); //["chocolate", "vanilla", ["apple", "banana", "pear"]];