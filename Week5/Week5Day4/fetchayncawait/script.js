
//WITHOUT ASYNC AWAIT
function getDataOne() {
    fetch("https://jsonplaceholder.typicode.com/users/1") //promise
    .then((res) => {
        if (res.status === 200) {
            res.json()
        } else {
            throw new Error("wrong")
        }
    })
    .then((user) => console.log(user))
}

// await
// waiting for the promise to come back settled
// retrieving the result of the promise

//async await with fetch
//error handling

//WITH ASYNC AWAIT
async function getUser(){
    const results = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if(results.status !== 200) {
        throw new Error("wrong user")
    } else {
        const user = await results.json(); //json method returns a promise
        return user.username; //return a result so the asyn function has a result for the promise
    }
}

async function getGif(username){
    const results = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${username}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    if(results.status !== 200) {
        throw new Error("wrong gif")
    } else {
        const gif = await results.json(); //json method returns a promise
        const url = gif.data.images.original.url;
        return url;
    }
}

//combine
async function mix () {
    try {
        const userName = await getUser() //getUser is a promise so I wait for it
        const gif = await getGif(userName) //getGif is a promise so I wait for it
        addGif(gif)
    } catch (err) {
        addGif("https://media.giphy.com/media/JT7Td5xRqkvHQvTdEu/giphy.gif")
    }
}

function addGif(url){
    const section = document.querySelector("#container");
    const image = document.createElement("img");
    image.src = url;
    image.style.width = 400+"px";
    section.appendChild(image)
}

mix()
