
const cors = require('cors');

// const displayImage = document.getElementsByTagName('img');

// for (let i = 0; i < displayImage.length; i++) {
//     console.log(displayImage[i].attributes);
// }
// for(let img of displayImage ){
//     console.log("here");
// }
// console.log(displayImage);


// displayImage.forEach(element => {
//    console.log(element.attributes);
// });


// CATEGORY SEARCH - with axios I have a ni issue to import it 

// async function apiRequest(){
//     console.log("je suis la ");
//     const config ={
//         methode:'get',
//         url:'https://www.thefactsite.com/feed/'
//     }

//     const res =await axios(config);
//     console.log(res.status)
// }
// apiRequest()

async function feedFetch() {
    try {
        const feed = await fetch('https://www.thefactsite.com/feed/');
        if(feed.status === 200){
            console.log(feed);
            const feedFetchItems = await feed.items.json();
            console.log(feedFetchItems);
        }else{
            throw new console.error("nop ");
        }
        
        // showCategories(feedFetchItems);
    }
    catch (e) {
        console.log(e);
    }
}
feedFetch()

// const getCategoriesButton = document.querySelector('#category_search');
// console.log(getCategoriesButton);
// getCategoriesButton.addEventListener('click', showCategories());

// function showCategories(items){
//     // console.log(getCaegories);
//     console.log("yes",items);
// }