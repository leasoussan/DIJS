const usersData = require('./users.js')

usersData.getUser() // at this point its a pending promess 
.then(getJsonFetch => {
    console.log(getJsonFetch);
})
.catch(err => {

})

