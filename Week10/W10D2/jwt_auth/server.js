import express from "express";
import cors from'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import user_router from './routes/Users.js';
import db from './config/elephantsql.js';



dotenv.config();
const app= express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extends:true}));


// // create a middle weare for the toekn  - to be put bBEFORE The router 
// const mymw = (req,res,next)=>{
//     console.log(req.body);
//     next()
//     // the next = is for the next action to  be doen if the middle ware came back "clean"
// }
// app.use(mymw) the middle ware can be here at the level or on other levels 



app.use(user_router);

app.listen(process.env.PORT||8080, ()=>{
    console.log(`run on ${process.env.PORT||8088}`)
})

try{
    await db.authenticate()
    console.log('Database Connected...')
   
}
catch(e){
    console.log(e);
}

