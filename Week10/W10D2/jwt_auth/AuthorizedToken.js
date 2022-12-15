// import jwt from 'jsonwebtoken'

// //to create a token 
// //sign(object-payload,secret,object-expires-in)
// const token = jwt.sign({name:'john', email:'jjj@gmail.com', id:123},'@#1234*88&', {expiresIn:'60s'})
// //to see token in terminal
// console.log(token)

// //to verify a token
// //verify(token, secret,(err,decode))
// jwt.verify(token, '@#123dfgdfg4*88&', (err,decode)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     //to decode the payload
//     console.log(decode.name, decode.email);
//     console.log('valid');
// })


// // how to creat atokem
