// Exercise 2 : Users and style
// Instructions



    // Add the code above, to your HTML file

    // Add a “light blue” background color and some padding to the <div>.

    // Do not display the <li> that contains the text node “John”.

    // Add a border to the <li> that contains the text node “Pete”.

    // Change the font size of the whole body.

    // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


let designDiv = document.body.getElementsByTagName("div")[0];

designDiv.style.background = "lightblue";

console.log(designDiv);


let parentElm = document.getElementsByTagName('ul');
let getElement = document.getElementsByTagName('ul')[0].firstElementChild;
// console.log(getElement);

parentElm.removeChild(getElement);

// let changeColor = document.getElementsByTagName('ul')[1]
// console.log(changeColo);