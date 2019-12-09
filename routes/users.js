const express = require('express')


const router = express.Router()
// const bcrypt = require('bcryptjs');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
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


module.exports = router;