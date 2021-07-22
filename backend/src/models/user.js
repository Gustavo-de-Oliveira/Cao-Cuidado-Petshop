'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define os produtos no DB
const schema = new Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    user_type: {
        type: String,
        required: true,
        enum: ['customer', 'admin'],
        default: 'customer',
    }
});


module.exports = mongoose.model('User', schema);