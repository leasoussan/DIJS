const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const parserI = require('rss-parser');
const parser = new parserI();
const axios = require('axios');
dotenv.config()

const app = express()
app.use(cors());
app.set('view engine', 'ejs'); //in order to use ejs template i need folder views- that he goes ther to get html

app.use('/', express.static(__dirname + '/public'))

app.listen(process.env.PORT, () => {
    console.log(`on port ${process.env.PORT}`);
})


// can i do it this way?
async function feedFetch() {
    try {
        const feed = await parser.parseURL('https://www.thefactsite.com/feed/');
        const feedFetchItems = feed.items;
        return feedFetchItems;
    }
    catch (e) {
        console.log(e);
    }
}

app.get('/home', (req, res) => {
    feedFetch().then(data => {
        res.render('pages/index', {
            data:data,
            });
    })

})


app.get('/search', (req, res) => {
    const data = feedFetch()
    .then(data => {
        res.render('pages/search', {data:data})
    })    
    })
   


    module.exports = {
        feedFetch:"feedFetch"
    }

    