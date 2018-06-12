const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    Password: {
        type:String,
        required: true
    }
});
const User = module.exports = mongoose.model('User',UserSchema);