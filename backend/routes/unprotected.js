
const express = require('express');
const usercontroller = require('../controller/usercontroller');

const router = express.Router();



router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    const User = user.find(u => u.email === email);
    if(!User) {return res.status(404).json({message:"User not found "})}
    if (User.password === password){
        console.log("user logged in")
    };
    
})
router.post('/users',usercontroller.findUser);
router.get('/users',usercontroller.getUsers);
router.post("/register", usercontroller.createUser);

module.exports = router;