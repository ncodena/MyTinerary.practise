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

router.get('/:name',
	(req, res) => {
  		let nameRequested = req.params.name;
  		userSchema.find({ name: nameRequested })
			.then(users => {
				res.send(users)
			})
			.catch(err => console.log(err));
});

router.post('/', (req, res) => {
    // console.log(req.body)
    const newUser = new userSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        birth: req.body.birth,
        country: req.body.country,
        img: req.body.img,
        email: req.body.email,
        password: req.body.password
        
    });
    console.log(newUser)
    newUser.save()
        .then(user => {
            console.log(user)
            res.send(user)
            })
            .catch(err => {
                console.log(err)
            res.status(500).send("Server error")}) 
    //     if (userName) {
    //         res.send(userName);
    //     }
    //     else if (email) {
    //         res.send(email);
    //     }
    //     else {
    //         res.status(500).send(err)
    //     }
    // })
});


module.exports = router;