// // asyncrenous function ()
// // will work out of the stuck and in the web api 

// // XTMLRequest 

// // to make the request into database we'll do a XTMLhttpRequest to get the data - ajax

// // in order to use ajax we have few steps
// //  Request to a server HTTP GET REQUEST  
// // 1 create an object with instance of the http request 
// const xhr = new XMLHttpRequest()
// // console.log(xhr);

// // 2. initialize the request 
// // object.open(method, url)

// function getData (){
//     xhr.open("GET", "https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731")
//     // send he request
//     xhr.send()

//     xhr.responseType ="json"
    
// }

// // getData()
// // in order to collect the data you have 3 events
// // listen tot he response
// // ONLOAD

// xhr.onload =function(){
//     if(xhr.status === 200){
//         console.log("succes");
//         // here i will need to parse the response data into JS object 

//         // see response type above will let me not do the lign below
//         // const data = JSON.parse(xhr.response)
//     }else{
//         console.log("error");
//     }
// }

// xhr.onprogress =function(){
// // here its what will happend while waiting for the response 
// }


// xhr.onerror =function(){
//     // only if its a network error 
// }


// ______________________________________________________________________________________
// class Practice
// AJAX
// Make an HTTP request using the GET METHOD on this API: https://jsonplaceholder.typicode.com/users

// Use the method onload, onprogress, onerror

// If there is no error, display on the page the name, email, city of the 3 first users

const xhr = new XMLHttpRequest();


function getData(){
    xhr.open("GET"," https://jsonplaceholder.typicode.com/users" );
    xhr.responseType = "json";
    xhr.send();
}
getData()

xhr.onload = function(){
    if(xhr.status === 200){
        console.log("bravo");
        displayRobot(xhr.response);

    }else{
        console.log("error here");
    }
}


xhr.onprogress = function(){
    console.log("patience is key");
}


xhr.onerror = () =>{
    console.log("sorry some bad stuff are happening");
}

function displayRobot(response){
    const container = document.querySelector('robots')
    response.forEach(element => {
        const imageBox = document.createElement('div');
        const textName = document.createTextNode(`${element.name}, ${element.city}, ${element.email}`);
        imageBox.appendChild(textName);
        document.body.appendChild(imageBox)

    });
    }


// in order to get a simple wya to loop through stuff 