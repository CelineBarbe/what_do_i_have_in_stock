const express = require('express');

const fabricController = require('../controller/fabricController');
const threadController = require('../controller/threadController');
const patternController = require('../controller/patternController');

const router = express.Router();

//Fabric
router.get('/:id(\\d+)/fabric', fabricController.findAll);

//Sewing thread
router.get('/:id(\\d+)/thread', threadController.findAll);

//Sewing pattern
router.get('/:id(\\d+)/pattern', patternController.findAll);

module.exports = router;