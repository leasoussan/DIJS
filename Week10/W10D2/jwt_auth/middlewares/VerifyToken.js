import jwt from "jsonwebtoken";
import Users from '../model/UserModel.js';

export const VerifyToken =(req,res,next)=>{
    console.log("token in ");
    const accessToken = req.coockies.accessToken||req.headers['x-access-token'];

    if(!accessToken) return res.status(401).json({msg:"access denied"})

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async(err, decode)=>{
        
        if (err) return res.status(403).json({msg:'verify Token Failed'});
        // here we check the email oft he token 
        // this is the token  reading email fields - we set it to be like this
        const email = decode.email
        try{
            const user =await Users.findAll({
                where:{
                    email:decode.email}
            })
            next()
            // next will go to contoroler - to know hwat to do then to routes

        }
        catch(e){
            res.status(403).json({msg:'Verify user failed'})
        }
    })
}

// req.headers['x-access-token' >>>> this is to be addes bcs some mobiles dont have HTTP request so the toekn 
// will be in the the header

// ***************
// the middleware can be placed in 3 places on the app- 
// in the server - app.use('users', mymw) >>> here it will be only on users
// in the routes after the( './', token)