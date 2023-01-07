const express = require('express');
const router = express.Router();
const deletebook = require('../../controller/myShelf/deleteBook');

router.route('/book/:user_id/:book_id').post(deletebook.deleteBooks);
module.exports = router; 
