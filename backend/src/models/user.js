'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define os usuários no DB
const schema = new Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    address: {
        state: {
            type: String
        },
        city: {
            type: String
        },
        street: {
            type: String
        },
    },
    paymentMethods: [{
        type: String,
        enum: ['credit_card', 'debit_card', 'paypal', 'picpay', 'bank_transfer'],
    }],

});

module.exports = mongoose.model('User', schema);