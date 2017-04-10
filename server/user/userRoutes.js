const express = require('express');
const authHandler = require('../handlers/loginHandlers').authme;
let router = express.Router();
const userController = require('./userController.js');

/*
 * GET
 */
router.get('/', authHandler, userController.list);

/*
 * GET
 */
router.get('/:id', authHandler, userController.show);

/*
 * POST
 */
router.post('/', userController.create); // reserve for admin

/*
 * PUT
 */
router.put('/:id', authHandler, userController.update);

/*
 * DELETE
 */
router.delete('/:id', authHandler, userController.remove);

module.exports = router;
