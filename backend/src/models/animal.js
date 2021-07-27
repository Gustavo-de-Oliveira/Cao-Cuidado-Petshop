'node strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    name: {
        type: String,
    },
    specie: {
        type: String,
        required: true,
    },
    race: {
        type: String,
    },
    birthDate: {
        type: Date
    },
    vaccines: [{
        type: String,
    }],
    images: [{
        type: String,
    }]    

});


module.exports = mongoose.model('Animal', schema);