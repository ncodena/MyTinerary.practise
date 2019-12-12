const express = require('express')

const router = express.Router()

const jwt = require("jsonwebtoken");

const key = require ('../keys');

const bcrypt = require('bcryptjs')

const userSchema = require('../model/userModel')

const authToken = require('../middleware/authMiddleware')


// POST Route for LOGIN

router.post('/', (req, res) => {

    const { password, email } = req.body;

    // = JSON.parse(Object.keys(req.body)[0]);

    // Simple validation
    if(!email || !password) {
        return res.status(400).json ({msg: 'Please enter all fields'});

    }

    //Check for existing user
    userSchema.findOne({email: req.body.email})
        
        .then((user) =>{
           
            if(!user) {

                res.status(400).json({msg: "User does not exist"});

            } else {

            //Validate password
            console.log("right before bcrypt",user)
            console.log(req.body.password, user.password);
            
            bcrypt.compare(req.body.password, user.password, function (err,isMatch){
                console.log("right after bcrypt")
                if(!isMatch) return res.status(400).json({msg: 'Invalid credentials'});
                else {
                    console.log("after isMatch")
                    const payload = {
                        id: user.id,
                        userName: user.userName,
                        // avatarPicture: user.avatarPicture
                        
                    };
            const options = { expiresIn: 3600 };
            console.log("after options")

            jwt.sign(
                payload,
                key.jwtSecret,
                options,
                (err, token) => {
                    console.log(err)
                    if(err){
                        return res.json({
                            success: false,
                            token: "There was an error"
                        });

                    }else {
                        console.log("user", user, "token", token)
                       return res.json({
                            success: true,
                            token: token,
                            user: user
                        });

                    }});

                }
            })
        }   
    })
    .catch(err => console.log(err)) 
});

router.get("/verify", (req,res) => {
    const user = authToken(req,res);
    res.send({
        user
    })
})

module.exports = router;