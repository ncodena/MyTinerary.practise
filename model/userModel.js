const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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
        unique: true
    },
    birth:{
        type: String,

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
    },

    favourites: { 
        type : [String], 
        // ref: 'Track' 

    }
});

userSchema.pre('save', async function(next){
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        //Generate a password hash (salt + hash)
        const passwordHash = await bcrypt.hash(this.password, salt);
        //Re-assign hashed version over origonal, plain text password
        this.password = passwordHash;
        next();
    }   catch (error){
        next(error);
    }

});


module.exports = mongoose.model('user', userSchema)