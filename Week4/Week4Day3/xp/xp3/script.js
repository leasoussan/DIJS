// Exercise 3 : Star Wars
// Instructions

// Using this array 
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

    // Use the reduce() method to combine all of these into a single string.


const getSentence = epic.reduce((prev, secd) => {
    const getWord =`${prev} ${secd}` ;
    console.log(getWord);
    return getWord;
}," ")