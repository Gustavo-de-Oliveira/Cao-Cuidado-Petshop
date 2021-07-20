'use strict';

// Includes
const express = require('express');
const router = express.Router();
const controller = require('../controllers/animal-controller')

// Create
router.post('/', controller.post);  

// Read
router.get('/', controller.get);

// Update 
router.put('/:id', controller.put);

// Delete
router.delete('/', controller.delete);

module.exports = router;