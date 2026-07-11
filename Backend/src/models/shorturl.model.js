const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    clicks:{
        type: Number,
        required: true,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    }
});
const shortUrl = mongoose.model('shortUrl', urlSchema);
module.exports = shortUrl;