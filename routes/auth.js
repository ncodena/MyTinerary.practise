const express = require('express')

const router = express.Router()

const jwt = require("jsonwebtoken");

const key = require ('../keys');

const bcrypt = require('bcryptjs');

const userSchema = require('../model/userModel');

const itinerarySchema = require('../model/Itinerary');

const commentSchema = require('../model/commentModel');

const authToken = require('../middleware/authMiddleware')

const ObjectId = require("objectid")

const db = require('./../keys').mongoURI;


// POST Route for LOGIN

router.post('/sign-in', (req, res) => {

    const { password, email } = req.body

    // req.body = JSON.parse(Object.keys(req.body)[0]);

console.log(req.body)
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

            
            bcrypt.compare(req.body.password, user.password, function (err,isMatch){
               
                if(!isMatch) return res.status(400).json({msg: 'Invalid credentials'});
                else {
                
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
                        return res.json({
                            success: false,
                            token: "There was an error"
                        });

                    }else {
                      
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
})

// @route GET auth/user
// @desc Get user data
// @access Private
router.get('/user', authToken, (req, res) => {
    console.log("inside the get route")
    userSchema.findById(req.user.id)
        .select('-password')
        .then(user =>res.json(user));
})

// GET Route for getting FAVOURITE ITINERARIES

router.get('/favourites/all',  (req, res) => {
    console.log('req', req.query)
    const userFavs = req.query.q.split(",");
    const favourites = userFavs.map((id) => ObjectId(id));
    itinerarySchema.find({
        "_id": {
            "$in": favourites
        }  
    }).then(favs => res.send(favs))
        
})


// PUT Route for PUSHING AND REMOVING FAVOURITES


  router.put("/UpdatingFavourites/", authToken, (req,res) => {
      console.log(req.body)
    userSchema.findOne({
        "_id":req.user.id
      }, (err, user) => {
          console.log(user)
        if (err) return res.sendStatus(500)
        if(!user)return res.sendStatus(403)
        if (user.favourites.indexOf(req.body.favourites) === -1) {
            updateFavourite(req.user.id, req.body.favourites, res, "$push")
        } else {
            updateFavourite(req.user.id, req.body.favourites, res, "$pull")
        }
      })
  })


  const updateFavourite = (userId, favId, res, action) => {
    userSchema.findOneAndUpdate({
        "_id":userId
      },
      {
          [action]: {
              "favourites": favId
          }
      },
      {new: true},
      (function(err, user){
            if (err) return res.sendStatus(500)
            if(!user)  return res.sendStatus(403)
            return res.send(user) 
      }))
  };

router.post("/:itinerary/comments", authToken, (req, res) => {

    const newComment = new commentSchema({
        author: req.user.id,
        itinerary: req.body.itinerary,
        body: req.body.body,
    });

    console.log(newComment)


    newComment.save().then(comment => res.send("comment created"))
})

router.get("/:itinerary/comments", authToken, (req, res) => {
    if (!req.user.id) return res.status(401).send("Log In")
    if (!req.body.itinerary) return res.status(403).send("No Itinerary")

    commentSchema
    .find({itinerary: req.body.itinerary})
    .then(comments => res.send(comments))
})

// router.get("/users/comments", (req, res) => {
//     console.log("inside the get route")
//     userSchema
//     .findById({"_id": req.body.id})
//     .then(user =>res.json(user));

//     commentSchema
//     .find({itinerary: req.body.itinerary})
//     .then(comments => res.send(comments))
// })



module.exports = router;