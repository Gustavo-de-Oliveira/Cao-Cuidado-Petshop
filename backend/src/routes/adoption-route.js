'use strict';

// Includes
const express = require('express');
const router = express.Router();
const controller = require('../controllers/adoption-controller')

// Create
router.post('/', controller.post);  

// Read
router.get('/', controller.get);
router.get('/admin/:id', controller.getById);
router.get('/:number', controller.getByNumber);

// Update
router.put('/:id', controller.put);

// Delete
router.delete('/:id', controller.delete);

module.exports = router;