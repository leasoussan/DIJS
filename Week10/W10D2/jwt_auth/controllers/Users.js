import Users from '../model/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode'

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'email', 'username', 'first_name', 'last_name']
        });
        res.json(users)
    }
    catch (e) {
        console.log(e);
        res.status(404).json({ "msg": 'not found' })
    }
}


export const register = async (req, res) => {
    const { first_name, last_name, password, username, email} = req.body;
    console.log(req.body)
    const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password,salt);

    console.log(hash);
    console.log(salt);
    try {   
         console.log("Im trying here");   
        await Users.create({
            first_name: first_name.toLowerCase(),
            last_name: last_name.toLowerCase(),
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: hash,
        })
        res.json({ msg: "registed with BRIO" })
    }
    catch (e) {
        console.log(e);
        res.status(404).json({ msg: "email already with us" })
    }
}







export const login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email.toLowerCase()
            }
        })

        const match = await bcrypt.compare(req.body.password, user[0].password);
        console.log(user[0].password, "user from db");
        console.log("user from input", req.body.password);
        if (!match) return res.status(400).json({ msg: 'Worng password YO!.' })

        const userId = user[0].id;
        const email = user[0].email;

        const token = jwt.sign({ userId, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '30s'
        });

        res.cookie('accessToken', token, {
            httpOnly: true,
            maxAge: 30 * 1000
        })
        // here we send the toek 
        res.json({ token: token })

    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: 'Email not found' })
    }
}




export const logout = (res, req) => {
    const accessToken = req.cookies['accessToken']
    if (!accessToken) return res.status(204).json({ msg: "cleared" })
    res.clearCookie('accessToken');
    res.status(200).json({ msg: "you are out" })
}




// here we create a new token with expiration time of 30 sec 
export const token = (req, res) => {
    const accessToken = req.cookies.accessToken || req.headers['x-access-token'];
    //for mobile tthe token might be in the header
    const decode = jwt_decode(accessToken)

    const token = jwt.sign({ userId: decode.userId, email: decode.email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '30s'
    });

    res.cookie('accessToken', token, {
        httpOnly: true,
        maxAge: 30 * 1000
    });

    res.status(200).json({ token: accessToken })
}

//   PAYLOAD IS NOT SECURE


// before I get to the user - I verify if i have to check if i have a token - permission denied