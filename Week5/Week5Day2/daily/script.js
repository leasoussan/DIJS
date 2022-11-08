// Instructions

// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button.
//  This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user 
// (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : 
// to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.


const getSearchButton = document.querySelector('#gif_form');
// here the form is the target that I could get it as an object and to go in it look for information
getSearchButton.addEventListener('submit', getUserSearch) ;


function getUserSearch (event) {
    event.preventDefault();
    // console.log(event.target.searchText.value);
    const getUserInput= document.querySelector('.searchText').value;   
    console.log(getUserInput);
    const url = `https://api.giphy.com/v1/gifs/random?tag=${getUserInput}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
    console.log(url);
    getData(url);
}


function getData(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.send();
    console.log("xhr log",xhr);

    xhr.onload = function(){
    if(xhr.status=200){
        console.log("ok la");
        const getFirstGif = xhr.response.data.url;
        getDisplayGifs(getFirstGif)
    } else{
        console.log("zuttt");
    };
}
}

function getDisplayGifs (response) {
    const getContainer =document.querySelector(".showGif");
    const createBox =document.createElement('img');
    const deletButton = document.createElement('button');
    deletButton.setAttribute('id', 'delete_btn')
        deletButton.textContent ="DELETE";    
        getContainer.appendChild(deletButton);
        createBox.setAttribute("src", response)
        createBox.setAttribute('class', 'gif_display')
        createBox.style.width = '300px';
        getContainer.appendChild(createBox);

}


// const deletButton = document.getElementById('delete_btn');
// deletButton.addEventListener('click', deleteGifDisplay);

// function deleteGifDisplay (){
//     const getGifToDelet = document.getElementById('gif_display');
//     getGifToDelet.delete()
// }