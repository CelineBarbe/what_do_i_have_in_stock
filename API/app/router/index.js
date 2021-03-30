const express = require('express');

const fabricController = require('../controller/fabricController');
const threadController = require('../controller/threadController');
const patternController = require('../controller/patternController');

const router = express.Router();

//Fabric
router.get('/:id(\\d+)/fabric', fabricController.findAll);
router.get('/:id(\\d+)/fabric/:fabricId(\\d+)', fabricController.findById);
router.post('/:id(\\d+)/fabric', fabricController.create);
router.delete('/:id(\\d+)/fabric/:fabricId(\\d+)', fabricController.delete);
router.patch('/:id(\\d+)/fabric/:fabricId(\\d+)', fabricController.update);

//Sewing thread
router.get('/:id(\\d+)/thread', threadController.findAll);
router.get('/:id(\\d+)/thread/:threadId(\\d+)', threadController.findById);
router.post('/:id(\\d+)/thread', threadController.create);
router.delete('/:id(\\d+)/thread/:threadId(\\d+)', threadController.delete);
router.patch('/:id(\\d+)/thread/:threadId(\\d+)', threadController.update);

//Sewing pattern
router.get('/:id(\\d+)/pattern', patternController.findAll);
router.get('/:id(\\d+)/pattern/:patternId(\\d+)', patternController.findById);
router.post('/:id(\\d+)/pattern', patternController.create);
router.delete('/:id(\\d+)/pattern/:patternId(\\d+)', patternController.delete);
router.patch('/:id(\\d+)/pattern/:patternId(\\d+)', patternController.update);

module.exports = router;