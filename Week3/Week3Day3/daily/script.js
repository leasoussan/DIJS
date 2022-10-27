// Instructions
// Daily challenge : Show only the letters

//     Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

//     Hint: use one of the following events to remove any character that is not a letter
//         keyup event
//         or keypress event
//         or keydown event
//         or input event

//     Hint : Check out keycodes in Javascript or Regular Expressions

const textResults = document.querySelector('input');
const authChar = /[A-Za-z]/;
textResults.addEventListener("keydown", showText);

function showText(event){
    console.log(event.key);
    if(!authChar.test(event.key)){
        event.preventDefault()
    }
}
