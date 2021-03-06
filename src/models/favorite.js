const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    artId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    artist: {
        type: String,
        required: false
    },
    dimensions: {
        type: String,
        required: false
    },
    medium: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Favorite', favoriteSchema);