// 1 daily challenge

//     Create two functions. Each function should return a promise.
//     The first function called makeAllCaps(), takes an array of words as an argument
//         If all the words in the array are strings, resolve the promise. 
//         The value of the resolved promise is the array of words uppercased.
//         else, reject the promise with a reason.
//     The second function called sortWords(), takes an array of words uppercased as an argument
//         If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
//         else, reject the promise with a reason.

// Test:
const wordsArray =["hello", "salut", "yes", "love","love","love"]

function makeAllCaps(wordsList){
    return new Promise((resolve, reject) =>{

        if(wordsList.every((element) => typeof element == 'string')){
            resolve(wordsList.map((element) => {
                element.toUpperCase()
            }))
        }else{
            reject(console.log("againe?? comn"))
        }
    })
        }



        // i want to do here map() creating a new one with the new values.
// in forEach an array == change the initianl array 


function sortWords(upperArray){
    return new Promise((resolve, reject) =>{
        console.log("upper", upperArray);
        if(upperArray.length > 4){
            resolve(console.log("here")); 

        }else{
            reject(console.log(("we said Min 4 ")))
        }
    });
}

// console.log(sortWords(wordsArray));


// //in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log("1st",result))
      .catch(error => console.log("snd",error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
    //   .then((arr) => console.log("t",arr))
      .then((arr) => sortWords(aorr))
      .then((result) => console.log("2",result))
      .catch(error => console.log("23",error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log("31",result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log("32",error))



