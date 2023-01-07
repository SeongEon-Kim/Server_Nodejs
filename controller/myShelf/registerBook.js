const bookService = require("../../service/myShelf/bookService");

/**
 * API No. 1
 * API Name : 책 등록 API
 * [POST] /book
 */
 module.exports.registerBooks = async (req, res) => {
    try {
        const user_id = parseInt(req.params.user_id);

        var title = req.body.title;
        var author = req.body.author;
        var publisher = req.body.publisher;
        var img_url = req.body.img_url;
        
        
        const registerResponse = await bookService.registerBook(
            user_id, 
            title, 
            author,
            publisher,
            img_url,
        );
        console.log(registerResponse);
        res.send(registerResponse);
      }
    catch (err) {
      console.log("Error", err);
    }
  };