const express = require('express')

const router = express.Router()

const userSchema = require('../model/userModel')


router.get('/all',
    (req, res) => {
		// console.log(req)
        userSchema.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
});

router.get('/:firstName',
	(req, res) => {
  		let nameRequested = req.params.firstName;
  		userSchema.find({ firstName: nameRequested })
			.then(users => {
				res.send(users)
			})
			.catch(err => console.log(err));
});

// POST new users

router.post('/register', (req, res) => {

    console.log(req.body)
    const {
        firstName,
        lastName, 
        userName, 
        password,
        email,
        country,
        hasAgreed
    } = req.body;
    // JSON.parse(Object.keys(req.body));

    // console.log(firstName,
    //     lastName, 
    //     userName, 
    //     password,
    //     email,
    //     country,
    //     hasAgreed)
    // Simple validation
    if(!userName || !email || !password) {
        return res.status(400).json ({msg: 'Please enter all fields'});

    }
    const newUser = userSchema;

    newUser.findOne({email} || {userName})
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
                res.send(user)
            })
    })
});

// POST Route for LOGIN



module.exports = router;