
// Check if Word are anagram 

function isAnagram(wordOne, wordTwo){
    return(
        // if the two strings letteres are === true
        wordOne.toLowerCase().replace(/ /g, "").split("").sort().toString()===
        wordOne.toLowerCase().replace(/ /g, "").split("").sort().toString()
    );
}

console.log(isAnagram('Astronomer', "Moon starter"));






// --------------------Class Ex
// i have a string and I want to check if its anagramme 
const str = "Moon Starter";
// 1. I create the string lowercase
const strToLower = str.toLowerCase();
// the we want to remove all possible space that there is 
const replaceSpace = strToLower.replaceAll(/ /g, '');
const strToArray = replaceSpace.(split);
const strToSort = strToArray.sort()