var express = require('express');
var router = express.Router();
const loginHandler = require('./handlers/loginHandlers');
/*
 * Login
 */
router.post('/login', loginHandler.login);
router.post('/logout', loginHandler.logout);


module.exports = router;
