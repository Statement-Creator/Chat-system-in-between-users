const mongoose = require('mongoose');

const friendSchema = mongoose.Schema({
    UsernameOfFriend:{
        type:String,
        required: true
    },
    EmailOfUser:{
        type:String,
        required: true
    }
});

const Friend = module.exports = mongoose.model('Friend',friendSchema);