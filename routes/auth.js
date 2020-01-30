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

// @route GET auth/getUser/:id
// @desc Get user data
// @access Public

router.get('/getUser/:id', 
   async (req, res) => {
    console.log("inside the get route")
    let userRequested = req.params.id;
    console.log(req.params.id)
    await getUserById(userRequested).then(user =>res.json(user)).catch(err => console.log(err));
});

const getUserById = async (id) => {
    return await userSchema.findOne({_id: id})
}



// @route GET auth/favourites/all
// @desc Get user's favourites itineraries data
// @access Private

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

// @route PUT auth/UpdatingFavourites/
// @desc PUSHING AND REMOVING favourite itineraries data from an user
// @access Private

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

// @route POST auth/:itinerary/comments
// @desc Post comments from any user profile
// @access Private

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
    if (!req.user.id) return res.status(401).send("Please, log in to show the comments")
    if (!req.body.itinerary) return res.status(403).send("No Itinerary")

    commentSchema
    .find({itinerary: req.body.itinerary})
    .then(async comments => {

       let modifiedComments =  [];
       for (el of comments) {
           let comment = await modifyComment(el)
            modifiedComments.push(comment)
        }
       console.log(modifiedComments)
       res.send(modifiedComments)
        })
})
const modifyComment = async (comment) => {
    const {author, body, itinerary, date} = comment;
    let user = await getUserById(ObjectId(author)).then(user => { 
        return { 
        id: user._id,
        userName: user.userName,
        img:user.img
    }
})
    console.log({
        user,
        body,
        itinerary,
        date
    })
    return {
        user,
        body,
        itinerary,
        date
    }
}

// @route DELETE auth/:itinerary/comments/:coment
// @desc Remove comments from any user profile
// @access Private


router.delete('/:itinerary/comments/:comment', authToken, (req, res) => {
    commentSchema
    .findOne({comment: req.params.id})
    .then(comment => comment.remove().then(comment => res.send("This comment has been successfully deleted")))
    .catch(err => res.status(404).json({success:false}))
});



module.exports = router;