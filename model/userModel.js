const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type:String,
        required:true,
    },
    userName: {
        type:String,
        required:true,
    },
    birth:{
        type: String,
        required:true,
    },
    country:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
});

// const userSchema = new mongoose.Schema({
//     name: String,
//     password: String
// })

module.exports = mongoose.model('user', userSchema)