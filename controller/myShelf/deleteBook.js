
const bookService = require("../../service/myShelf/bookService");

/**
 * API No. 2
 * API Name : 책 삭제 API
 * [POST] /book
 */
 module.exports.deleteBooks = async (req, res) => {
    try {
        const user_id = parseInt(req.params.user_id);
        const book_id = parseInt(req.params.book_id);
        //const register = parseInt(req.params.register);
        //const status = parseInt(req.params.status);
        
        const deleteResponse = await bookService.deleteBook(
            user_id, 
            book_id, 
            //status
        );
        console.log(deleteResponse);
        res.send(deleterResponse);
      }
    catch (err) {
      console.log("Error", err);
    }
  };