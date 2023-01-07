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

        // Q book_id도 숫자로 params로 받나요?
        
        const deleteResponse = await bookService.deleteBook(
            user_id, 
            book_id, 
        );
        console.log(deleteResponse);
        res.send(deleteResponse);
      }
    catch (err) {
      console.log("Error", err);
    }
  };