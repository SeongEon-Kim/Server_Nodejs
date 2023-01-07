const express = require('express');
const router = express.Router();
const registerbook = require('../../controller/myShelf/registerBook');

router.route('/book').post(registerbook.registerBooks);
module.exports = router; 