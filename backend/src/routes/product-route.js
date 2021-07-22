'use strict';

// Includes
const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller')

// Read
router.get('/', controller.get);

// Create
router.post('/', controller.post);  

// Update
router.put('/:id', controller.put);

// Delete
router.delete('/:id', controller.delete);

module.exports = router;