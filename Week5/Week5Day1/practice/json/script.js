// CONVERT A JSON STRING TO A JS OBJECT
const listEmployees = `{
	"employees":[
	    {"firstName":"John", "lastName":"Doe"},
	    {"firstName":"Anna", "lastName":"Smith"},
	    {"firstName":"Peter", "lastName":"Jones"}
	]
}`

//convert it to a JS Object
const listEmployeesJsObject = JSON.parse(listEmployees)


// listEmployeesJsObject 
// {employees: Array(3)}employees: Array(3)0: {firstName: 'John', lastName: 'Doe'}1: {firstName: 'Anna', lastName: 'Smith'}2: {firstName: 'Peter', lastName: 'Jones'}length: 3[[Prototype]]: Array(0)[[Prototype]]: Object
console.log(listEmployeesJsObject.employees[0].firstName)
// 'John'
console.log(typeof listEmployees)
// 'string'
console.log(typeof listEmployeesJsObject)
// 'object'

// CONVERT A JS OBJECT TO A JSON STRING
const family = {
    member: 2,
    lastName: "Smith"
}

//converting a js object into a json string

const familyJson = JSON.stringify(family)


//DEEP CLONE WIH JSON METHODS

const shopping = ['chocolate', 'vanila', ['apple', 'banana']]
//cloning the array
// shallow copy - spread
const paid = [...shopping]

shopping[0] = "caramel"
console.log(shopping); //['caramel', 'vanila', ['apple', 'banana']]
console.log(paid); //['chocolate', 'vanila', ['apple', 'banana']]

shopping[2][1] = "pear"
console.log(shopping); //['caramel', 'vanila', ['pear', 'banana']]
console.log(paid); //['chocolate', 'vanila', ['pear', 'banana']]

// deep clone with JSON methods
// first stringify the array
// second we parse the stringify
const shoppingTwo = ['chocolate', 'vanila', ['apple', 'banana']]
const paidTwo = JSON.parse(JSON.stringify(shopping))
shoppingTwo[2][1] = "pear"
console.log(shoppingTwo); //['chocolate', 'vanila', ['pear', 'banana']]
console.log(paidTwo); //['chocolate', 'vanila', ['apple', 'banana']]


//WITH OBJECTS

const familyOne = {
    member: 2,
    lastName: "Smith",
    friends : {
        first : "John",
        second : "Tom"
    }
}

//spreading the object
// shallow copy
// cloning the object
//familyOne and myFamily have the same value, not the same reference
const myFamily = {...familyOne};

myFamily.lastName = "Cohen";

console.log(myFamily.lastName); //Cohen
console.log(familyOne.lastName); //Smith

// the inner object still have the same reference
myFamily.friends.first = "Vanessa";
console.log(myFamily.friends.first); //Vanessa
console.log(familyOne.friends.first); //Vanessa

// deep clone
// JSON.stringify and JSON.parse
// the inner object was passed by value - it means the inner objects don't have the same reference
const familyTwo = {
    member: 2,
    lastName: "Smith",
    friends : {
        first : "John",
        second : "Tom"
    }
}

const myFamilyTwo = JSON.parse(JSON.stringify(familyTwo));

myFamilyTwo.friends.first = "Vanessa";
console.log(myFamilyTwo.friends.first); //Vanessa
console.log(familyTwo.friends.first); //John