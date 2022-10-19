// Using this array :

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//     Remove Banana from the array.
//     Sort the array in alphabetical order.
//     Add “Kiwi” to the end of the array.
//     Remove “Apples” from the array. Don’t use the same method as in part 1.
//     Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
//     At the end you should see this outcome:

// ["Kiwi", "Oranges", "Blueberries"]


console.log(fruits)

fruits.splice(0,1);
console.log(fruits)

fruits.sort();
console.log(fruits)

fruits.push("kiwi");
console.log(fruits)

fruits.shift(0);
console.log("remove apples",  fruits)


fruits.reverse()
console.log(fruits)





// Ex 2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

    // Access and then console.log “Oranges”.


console.log("more fuits", moreFruits[1][1])