


// Exercise 1 : Users
// Instructions



//     Add the code above, to your HTML file

//     Using Javascript:
//         Retrieve the div and console.log it
//         Change the name “Pete” to “Richard”.
//         Change each first name of the two <ul>'s to your name.
//         Delete the <li> that contains the text node “Sarah”.

//     Bonus - Using Javascript:
//         Add a class called student_list to both of the <ul>'s.
//         Add the classes university and attendance to the first <ul>.


const findDiv = document.body.firstElementChild;
// or
// const findDiv = document.body.children[0];

// console.log(findDiv);


let changeName = document.body.firstElementChild.firstElementChild.lastElementChild

changeName.textContent='Richard';
console.log(changeName);

const getFirstOfList = document.querySelectorAll('.list');
// console.log(getFirstOfList);

console.log(getFirstOfList.length);

for (i of getFirstOfList){
    console.log(i);
    i.firstElementChild.textContent = "lea"
};

let parentElement = document.getElementsByClassName("list")[1];
let getElement = document.getElementsByClassName("list")[1].children[1];
parentElement.removeChild(getElement)
console.log(getElement);