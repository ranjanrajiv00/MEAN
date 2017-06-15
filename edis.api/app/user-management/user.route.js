'use strict';
var userController = require('./user.controller');
var express = require('express');
var tokenInspector=require('./../../middleware/token.inspector');
var router = express.Router()

router.use(tokenInspector);

router.get('/', userController.get);
router.get('/:id', userController.getById);
router.post('/', userController.add);
router.put('/', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;