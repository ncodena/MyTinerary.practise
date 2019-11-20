const express = require('express')

const router = express.Router()

const itinerarySchema = require('../model/Itinerary')

router.get('/all',
    (req, res) => {
        itinerarySchema.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
});

router.get('/:cityId',
	(req, res) => {
  		let cityRequested = req.params.cityId;
  		itinerarySchema.findOne({ cityId: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});

module.exports = router;