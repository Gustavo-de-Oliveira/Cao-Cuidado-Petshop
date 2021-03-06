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
    realPrice: {
        type: Number,
    },
    salePrice: {
        type: Number,
        required: true,
    },
    onOffer: {
        type: Boolean,
        required: true,
        default: false,
    },
    link: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true, // Set valor default
    },
    stock: {
        type: Number
    },
    images: [{
        type: String
    }],
    brand: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model('Product', schema);
