const formGif = document.querySelector("#gifform");
formGif.addEventListener("submit", retrieveCategory);
// we use a sub;it event on the form so event.target is the form
// event.target.category is pointing to the input of the form with the id "category"


function retrieveCategory(event){
    //1. Retrieving the value of the input when the form is submitted
    console.log(event);
    event.preventDefault();
    const userCategory = event.target.category.value;
    makeRequest(userCategory);
}

// function makeRequest(category){
//     const xhrObj = new XMLHttpRequest(); //create the object
//     //open the request with the category from the user(ie. from the form)
//     xhrObj.open("GET", `https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
//     //set up the responseType
//     xhrObj.responseType = "json";
//     // sent the request
//     xhrObj.send()

//     //waiting for the response to come back
//     xhrObj.onload = function () {
//         document.body.style.backgroundColor = "white"
//         console.log(xhrObj);
//         if(xhrObj.status !== 200) {
//             console.log("ERROR");
//         } else {
//             appendGifToPage(xhrObj.response.data.images.original.url)
//         }
//     }

//     xhrObj.onprogress = function () {
//         console.log("progress");
//         document.body.style.backgroundColor = "red"
//     }

//     xhrObj.onerror = function () {
//         console.log("IN THE ERROR EVENT");
//     }
// }

// // append the gid to the page using the DOM
// // gifURL comes from the onload callback function
// function appendGifToPage(gifUrl) {
//     const sectionElement = document.querySelector("#container");
//     const imageElement = document.createElement("img");
//     imageElement.setAttribute("src", gifUrl) //set the src of the image
//     sectionElement.appendChild(imageElement)
// }

// //deleting one image
// //deleting all images