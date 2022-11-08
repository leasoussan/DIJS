const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
    }`


// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
//     this function converts the morse json string provided above to a morse javascript object.
//     if the morse javascript object is empty, throw an error (use reject)
//     else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//     This function asks the user for a word or a sentence.
//     if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//     else return an array with the morse translation of the user’s word.

//     if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
//     if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
//     this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.

function toJs(toParse) {
    const code = JSON.parse(toParse);

    const getPromise = new Promise((resolve, reject) => {
        // console.log("code here", );
        if (code[0] != '') {
            console.log("Im in");
            resolve(toMorse(code));
        } else {
            reject(console.log("empty stuff here"))
        }
    })
}

toJs(morse)

function toMorse(morseJS) {
    const getInput = prompt("write something here").split('');
    const newPromise = new Promise((resolve, reject) => {
              for(let letter of getInput){
                console.log("lol");
              }
        })

    }
    