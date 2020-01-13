// const UserSchema = mongoose.model('User');
const mongoose = require('mongoose')
const itinerarySchema = new mongoose.Schema({
    cityId:{
        type: String,
        required: true
    },
    references:{
        type:String,
        required:true,
    },
    title:{
        type: String,
        required:true,
    },
    img:{
        type: String,
        required:true,
    },
    rating:{
        type: Number,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    activities:{
        type: Array,
        required:true
    },

    // favouritesCount:{
    //     type: Number,
    //     default: 0
    // }

});

// itinerarySchema.methods.updateFavouriteCount = function() {
//     const itinerary = this;
//     return UserSchema.count({favourites: {$in: 
//         [itinerary._id]}}).then(function(count){
//             itinerary.favouritesCount = count;
//             return article.save();
//         })
// };

module.exports = mongoose.model('itinerary', itinerarySchema)