const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const parserI = require('rss-parser');
const parser = new parserI();
const axios = require('axios');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const fs = require('fs');//read write on file
const { log } = require('console');
dotenv.config()

const app = express()
app.use(cors());
app.set('view engine', 'ejs'); //in order to use ejs template i need folder views- that he goes ther to get html


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
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

app.get('/rss', (req, res) => {
    feedFetch()
        .then(data => {
            res.json(data)
        })
        .catch(e => {
            console.log(e);
        })
})

app.get('/home', (req, res) => {
    feedFetch().then(data => {
        res.render('pages/index', {
            data: data,
        });
    })

})


app.get('/search', (req, res) => {
    const data = feedFetch()
        .then(data => {
        
            res.render('pages/search', { data: data })
        })
        .catch(e => {
            console.log(e);
        })
})


const isUserExists = (arr, email) => {
    const filterUser = arr.filter(user => {
        return user.email == email;
    })
    return (filterUser.length > 0) ? true : false
}



// // option1
// app.post('/register', (req,res)=>{
//     const {firstname,lastname,email,password,username} = req.body;
//     console.log(req.body); //he is why we have this 
// //    app.use(bodyParser.urlencoded({ extended: false }))
//    // parse application/json
// //    app.use(bodyParser.json())
//     const salt = bcrypt.genSaltSync();
//     const hash = bcrypt.hashSync(req.body.password, salt)
//     //bcrypy model will transformed the password into hash code 

//     const users =[];
//     try{
//         const f =fs.readFileSync('./users');
//         users = JSON.parse(f.toString())
//     }
//     catch(e){}

//     users.push({firstname,lastname,username,email,password:hash})


//     res.json({password:hash})
// }

///option 2

app.post('/register', (req, res) => {
    console.log(req.body);

    let users = [];
    try {
        const f = fs.readFileSync('./users');
        users = JSON.parse(f.toString())
    }
    catch (e) { }

    if (isUserExists(users, req.body.email)) {
        return res.json({ msg: "email Exisits" })
    }
    //he is why we have this 
    //    app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    //    app.use(bodyParser.json())
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt)
    //bcrypy model will transformed the password into hash code 
    req.body.password = hash

    users.push(req.body)

    fs.writeFile('./users', JSON.stringify(users), err => {
        if (err) {
            console.log(err);
        }
    })
    res.json(users)

})



app.get('/login', function(req, res, next) { 
    res.render('login'); 
 }); 



app.post('/login', (req, res) => {
    const { email, password } = req.body;
    let users = []
    try {
        const f = fs.readFileSync('./users');
        users = JSON.parse(f.toString())
    }
    catch (e) { 
        console.log(e);
    }

    if(!isUserExists(users,email)){
        return res.json({msg:'user does not exist'})
      }

    const userData = users.find(user => {
        console.log(users);
        return user.email == email;
    })

    console.log('user_data', userData);

    const matchTest = bcrypt.compareSync(password, userData.password)

    if (!matchTest) {
        return res.json({ msg: "wrong Password" })
    }

    res.json({ msg: "Login ok" })
    res.sendFile(__dirname + '/public/account/login.html' )
})

