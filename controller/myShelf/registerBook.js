const bookService = require("../../service/myShelf/bookService");

/**
 * API No. 1
 * API Name : 책 등록 API
 * [POST] /book
 */
 module.exports.registerBooks = async (req, res) => {
    try {
        const user_id = parseInt(req.params.user_id);
        const title = parseInt(req.params.title);
        //const register = parseInt(req.params.register);
        //const status = parseInt(req.params.status);
        
        const registerResponse = await bookService.registerBook(
            user_id, 
            title, 
            //register, 
            //status
        );
        console.log(registerResponse);
        res.send(registerResponse);
      }
    catch (err) {
      console.log("Error", err);
    }
  };