const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user'
    },

    itinerary: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'itinerary'
    },

    date: {
        type: Date,
        default: Date.now
    },

    body: String,
});

module.exports = mongoose.model('comment', commentSchema)

