// fetch is also Asyncronuse
// it performs everything that the XML 
// fetch is based on promises 

// fetch('url')
// this is already and if -with the fetch is a GET request -FETCH RETURN A PROMISE
// so after a fetch I need a .THEN and CATCH 
// .then((res) => console.log(res))// give me the results of the fetch - promise 
// // here res is the returned element from the fetch and I giv it a a name 
// .catch((err) => console.log(err))

// all this piec of code is ASYCONCRONOUSE 



// for(let i =0; i<300; i++){
//     console.log("hello");
// }
// if I do this function it will run 300 time before the fetch response 

// results are coming back in the body of the response, whic I cant access it at this point
// we need to use: Response.json()
// this a methode of the response object, to give it back as an JS object 

// .then((res) => res.json())
// // the json give me back a promise that I need - so I ll need a nother then to consume the promis
// .then((arrayUser) => console.log(arrayUser))
// .catch((err) => console.log(err))



// Exercise
// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. 
// Use this documentation https://developers.giphy.com/docs/api/endpoint#random 
// https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 
// You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category,
//  you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"


function getWord (){
    
    fetch('http://random-word-api.herokuapp.com/word?number=1')
    .then((res) => {
        if(res.status != 200){
            throw new Error("nothing here")
        }else{
            return res.json()
        }
    })
    .then((gifObject) => getGif(gifObject))
}

        
getWord()

function getGif(gifResults){
    // console.log("gifObject",gifResults)
    const url = `https://api.giphy.com/v1/gifs/random?tag=${gifResults}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
    // console.log("the url", url);
    fetch(url)
    .then((response) => {
        // throw new Error()// to check error 
        if(response.status != 200){
            throw new Error("error in the first then")
        }else{
            console.log("this works well");
            return response.json()// here i first get a response then i turn it into JS object by calling json()
        }
    })
    .then((gifObj) => {
        displayGif(gifObj)// here i want to take the response and to send it to a function that will display it 
        console.log("lastfunction of getGif", gifObj);
    })
    .catch((err) => {
        fetch('https://api.giphy.com/v1/gifs/random?tag=notworking&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
        .then((response) => {
            return response.json()
        })
        .then((err_gif) => {
            displayGif(err_gif);
            alert("this is a 404")
        })
        })
    }




function displayGif(gifImg){
    console.log("gif deatial object",gifImg);
    const selectConainter = document.querySelector('#gifDisplay');
    const createBox = document.createElement('img');
    createBox.src = gifImg.data.images.original.url;
    selectConainter.appendChild(createBox);
    }