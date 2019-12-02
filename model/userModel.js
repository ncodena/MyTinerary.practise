const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    last_name:{
        type:String,
        required:true,
    },
    birth:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('user', userSchema)