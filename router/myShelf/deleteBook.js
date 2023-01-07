const express = require('express');
const router = express.Router();
const deletebook = require('../../controller/myShelf/deleteBook');

router.route('/book').post(deletebook.deleteBooks);
module.exports = router; 
