const express = require('express')

const router = express.Router()

const itinerarySchema = require('../model/Itinerary')

router.get('/all',
    (req, res) => {
		// console.log(req)
        itinerarySchema.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
});

router.get('/:cityId',
	(req, res) => {
  		let cityRequested = req.params.cityId;
  		itinerarySchema.find({ cityId: cityRequested })
			.then(itineraries => {
				res.send(itineraries)
			})
			.catch(err => console.log(err));
});




module.exports = router;