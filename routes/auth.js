const express = require('express')

const router = express.Router()

const jwt = require("jsonwebtoken");

const key = require ('../keys');

const bcrypt = require('bcryptjs')

const userSchema = require('../model/userModel')

const itinerarySchema = require('../model/Itinerary')

const authToken = require('../middleware/authMiddleware')

const ObjectId = require("objectid")


// POST Route for LOGIN

router.post('/sign-in', (req, res) => {

    const { password, email } = req.body

    // req.body = JSON.parse(Object.keys(req.body)[0]);


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
});

// @route GET auth/user
// @desc Get user data
// @access Private

router.get('/user', authToken, (req, res) => {
    console.log("inside the get route")
    userSchema.findById(req.user.id)
    // console.log(req.user.id)
        // .select('-password')
        // console.log(password)
        .then(user =>res.json(user));
});

// GET Route for FAVOURITES
router.get('/favourites',
    (req, res) => {
        let favouritesArray = req.params.favourites;
        userSchema.findOne({favourites: favouritesArray })
            .then(favourite => {
                res.send(favourite)
            })
            .catch(err => console.log(err));
});




// POST Route for FAVOURITES

// router.put("/favourites/userId", authToken, (req, res) => {
    
//       // Return updated 
//       userSchema.findOneAndUpdate(
//         { _id: ObjectId(req.body.userId)},
//             .then((user) => {
//                 {$push: {favourites: newFavourite}}
//                 user.save()
//                 .then((user)=> {
//                     itinerarySchema.find( _id: user.favourites)
//                         .then(favourites => res.send(favourites))

//                 });
//                 .catch(err => res.json(err))"
//     );
//   });

//   router.put("/addFavourites/:id", authToken, (req, res) => {
//       userSchema.findByIdAndUpdate ({ _id: ObjectId(req.body.id)}, 
//         {$push: {favourites: newFavourite}}, function (err, user) {
//             if (err) console.log(err);
//             console.log(user);
//         });
//   })



  router.put("/addToFavourites/", authToken, (req,res) => {
    userSchema.findOne({
        "_id":req.user.id
      }, (err, user) => {
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
  }


             // else {
                
            //     if(user.favourites.indexOf(id) === -1){
            //         return user.favourites.push(id);
            //     } user.save()
            //         .then((user) => {
            //             itinerarySchema.find({ _id: user.favourites })
            //                 .then(favourites=> res.send(favourites))
            //         })
            //         console.log(favourites)
            // }

//   router.post('/:itinerary/favourite', authToken, (req,res) =>{
//       userSchema.findById(req.params.id)
//         .then(function(user) {
//             if(!user){
//                 return res.sendStatus(401)
//             }
//             else{
//                 userSchema.favourite(req.itinerary._id)
//                     .then(function(){
//                         return req.itinerary.updateFavouriteCount()
//                         .then(function(){
//                             return res.json({itinerary: req.itinerary(user)});
//                         });
//                     });
//             }
//         }).catch(err);
//   });


module.exports = router;

// router.put("/favourites/userId", authToken, (req, res) => {
    
//     // Return updated 
//     userSchema.findOneAndUpdate(
//       { _id: ObjectId(req.body.userId)},
//       {$push: {favourites: newFavourite}}
//       itinerarySchema.findById(

//       )
//           .then(newFavourite => res.send(newFavourite))
//           .catch(err => res.json(err))
//   );
// });


module.exports = router;