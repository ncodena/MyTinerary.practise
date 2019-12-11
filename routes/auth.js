const express = require('express')

const router = express.Router()

const jwt = require("jsonwebtoken");

const key = require ('../keys');

const bcrypt = require('bcryptjs')

const userSchema = require('../model/userModel')


// POST Route for LOGIN

router.post('/', (req, res) => {

    const { password, email } = req.body;

    console.log(req.body)
    // = JSON.parse(Object.keys(req.body)[0]);

    // Simple validation
    if(!email || !password) {
        return res.status(400).json ({msg: 'Please enter all fields'});

    }

    //Check for existing user
    userSchema.findOne({email: req.body.email})
        .catch(err => console.log(err)) 
        .then(user =>{
            if(!user) return res.status(400).json({msg: "User does not exist"});

            if(user){

            //Validate password
            bcrypt.compare(req.body.password, user.password), function (isMatch){
                if(!isMatch) return res.status(400).json({msg: 'Invalid credentials'});
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        userName: user.userName,
                        // avatarPicture: user.avatarPicture
            };
            const options = { expiresIn: 3600 };

            jwt.sign(
                payload,
                key.jwtSecret,
                options,
                (err, token) => {
                    if(err){
                        res.json({
                            success: false,
                            token: "There was an error"
                        });

                    }else {
                        res.json({
                            success: true,
                            token: token,
                            user: user
                        });

                    }});




                }
            }}
              

        });

        


});



module.exports = router;