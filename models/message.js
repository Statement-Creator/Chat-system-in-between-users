const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    message:{
        type: String,
        required:true
    },
    sender:{
        type:String,
        required: true
    },
    accessibleBy:{
        type:String,
        require:true
    }
})

const Message = module.exports = mongoose.model('Message',MessageSchema);