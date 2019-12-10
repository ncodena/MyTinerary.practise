const express = require('express')

const router = express.Router()

const userSchema = require('../model/userModel')

const jwt = require("jsonwebtoken");

const key = require ('../keys').jwtSecret;


// POST Route for LOGIN

router.post('/register', (req, res) => {

    const {
        firstName,
        lastName, 
        userName, 
        password,
        email,
        country,
        hasAgreed
    } = JSON.parse(Object.keys(req.body)[0]);

    // Simple validation
    if(!userName || !email || !password) {
        return res.status(400).json ({msg: 'Please enter all fields'});

    }

    //Check for existing user

    newUser.findOne({email})
        .then(user =>{

            if(user) return res.status(400).json({msg: "User already exists"});

            const newUser = new userSchema({
                firstName,
                lastName, 
                userName, 
                password,
                email,
                country,
                hasAgreed
            });

            newUser.save()
                .then (user => {
                    jwt.sign(
                        {id: user.id},
                        key.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    userName: user.userName,
                                    email: user.email,
                                }
                            })
                        }

                    )


                    
                })
        

        })

    

    

    

    
    

});





module.exports = router;