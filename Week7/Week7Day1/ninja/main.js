const http = require('http')
const server = http.createServer((req,res)=>{
if(req.url == '/'){
    res.end('<h1>home page</h1>')
}
else if(req.url == '/about'){
    res.end('<h1>about page</h1>')
}else {
   
    res.end('page is not found')
}
})


// server.listen(5000)

// if i want to see to waht port Im listening 
server.listen(5000, ()=>{
    console.log('servers is runing on port 500');
})




// const server = http.createServer((req,res)=>{
//     if(req.url == '/'){
//         if(req.methode ==='GET')// when we want a get or porth methode 
//         res.end('<h1>home page</h1>')
//     }
//     else if(req.url == '/about'){
//         res.end('<h1>about page</h1>')
//     }else {
       
//         res.end('page is not found')
//     }
//     })
    