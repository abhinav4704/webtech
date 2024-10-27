const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const authMiddleware = require('../middleware/authMiddleware');
const User = require('../model/user');

const router = express.Router();


router.post('/login',async (req,res)=>{
    

    const {email,password} = req.body;
    
    const user = await User.findOne({ where: { email: email } });
    console.log(user.dataValues)
    
    if(!user) {return res.status(404).json({message:"User not found "})}
    if (user.password === password){
        console.log("userr logged in")
        console.log(user)
        const token = jwt.sign({ id:user.id,authenticated:"true"}, "helloworld", { expiresIn: '1m' });
        res.json({ token });
        console.log("token "+ token)
    };
    
})

router.get('/dashboard', authenticateToken, async (req,res)=>{
    const user = await User.findOne({where: {id: req.user.id}})
    res.json({user: user})}
);

function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, "helloworld", (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        console.log(user)
        next();
    });
}


module.exports = router;