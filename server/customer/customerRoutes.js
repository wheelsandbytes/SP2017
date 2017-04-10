const express = require('express');
const authHandler = require('../handlers/loginHandlers').authme;
let router = express.Router();
const customerController = require('./customerController.js');

/*
 * GET
 */
router.get('/', authHandler, customerController.list);

/*
 * GET
 */
router.get('/:id', authHandler, customerController.show);

/*
 * POST
 */
router.post('/', authHandler, customerController.create);

/*
 * PUT
 */
router.put('/:id', authHandler, customerController.update);

/*
 * DELETE
 */
router.delete('/:id', authHandler, customerController.remove);

module.exports = router;
