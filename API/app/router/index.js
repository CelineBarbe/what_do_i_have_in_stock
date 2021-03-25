const express = require('express');

const fabricController = require('../controller/fabricController');
const threadController = require('../controller/threadController');
const patternController = require('../controller/patternController');

const router = express.Router();

//Fabric
router.get('/:id(\\d+)/fabric', fabricController.findAll);
router.get('/:id(\\d+)/fabric/:fabricId(\\d+)', fabricController.findById);

//Sewing thread
router.get('/:id(\\d+)/thread', threadController.findAll);
router.get('/:id(\\d+)/thread/:threadId(\\d+)', threadController.findById);

//Sewing pattern
router.get('/:id(\\d+)/pattern', patternController.findAll);
router.get('/:id(\\d+)/pattern/:patternId(\\d+)', patternController.findById);

module.exports = router;