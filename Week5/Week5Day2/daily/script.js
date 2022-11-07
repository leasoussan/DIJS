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


const getSearchButton = document.querySelector('#searchgif_btn');
getSearchButton.addEventListener('click', getUserSearch) ;


function getUserSearch (event) {
    event.preventDefault();
    const getUserInput= document.querySelector('.searchText').value;   
    const url = `https://api.giphy.com/v1/gifs/search?q=${getUserInput}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    ;
    getData(url);
}

const xhr = new XMLHttpRequest()

function getData(url) {
    xhr.open("GET", url)
    xhr.responseType = "json";
    xhr.send()
    console.log("xhr log",xhr);
}


xhr.onload = function(){
    if(xhr.status=200){
        console.log("ok la");
        const getFirstGif = xhr.response.data[0];
        getDisplayGifs(getFirstGif)
    } else{
        console.log("zuttt");
    };
}


function getDisplayGifs (response) {
    const getContainer =document.querySelector(".showGif");
    const createBox =document.createElement('img');
    const deletButton = document.createElement('button');
    deletButton.setAttribute('id', 'delete_btn')
        deletButton.textContent ="DELETE";    
        getContainer.appendChild(deletButton);
        createBox.src = response.url;
        createBox.setAttribute('class', 'gif_display')
        createBox.style.width = '300px';
        getContainer.appendChild(createBox);

}


const deletButton = document.getElementById('delete_btn');
deletButton.addEventListener('click', deleteGifDisplay);

function deleteGifDisplay (){
    const getGifToDelet = document.getElementById('gif_display');
    console.log(getGifToDelet);
}