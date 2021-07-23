'use strict';

// Includes
const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller')

// Create
router.post('/', controller.post);  

// Read
router.get('/', controller.get);
router.get('/admin/:id', controller.getById);
router.get('/:email', controller.getByEmail);

//Update
router.put('/:id', controller.put);

// Delete
router.delete('/:id', controller.delete);

module.exports = router;