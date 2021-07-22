'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define os produtos no DB
const schema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true,
    }, 
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    oldPrice: {
        type: Number,
    },
    newPrice: {
        type: Number,
        required: true,
    },
    link: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true, // Set valor default
    },
});


module.exports = mongoose.model('Product', schema);