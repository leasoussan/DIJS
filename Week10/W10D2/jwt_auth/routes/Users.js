import express from 'express';
import {getUsers, register, login, logout, token } from'../controllers/Users.js';
import { VerifyToken } from '../middlewares/VerifyToken.js';


const router =express.Router();
router.post('/register/', register, VerifyToken)
// router.post('/register/', register)
router.get('/users/', getUsers);
router.post('/login/', login)
router.get('logout', logout)
router.get('/token', VerifyToken, token)


// In the verify token we moved it as function to check - but processing could be done via here as well)
// (req,res)=>{
    // // optional to add a new token here
    // const accessToken = req.coockies.accessToken||req.headers['x-access-token'];
    // const token = jwt.sign({userId:decode.userId, email:decode.email}, process.env.ACCESS_TOKEN_SECRET)

    // res.status(200).json({msg:'verify'})
// })
export default router