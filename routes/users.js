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

    console.log(firstName,
        lastName, 
        userName, 
        password,
        email,
        country,
        hasAgreed)
    

    const newUser = new userSchema({
        firstName,
        lastName, 
        userName, 
        password,
        email,
        country,
        hasAgreed
    });


    newUser.save ((err, userName) => {
        if (userName) {
            res.send(userName);
        }
        else {
            res.status(500).send(err)
        }
    })

    if (!email) {
        return res.send({
          success: false,
          message: 'Error: Email cannot be blank.'
        });
    }

    if (!password) {
        return res.send({
          success: false,
          message: 'Error: Password cannot be blank.'
        }); 
    }

});

// POST Route for LOGIN



module.exports = router;