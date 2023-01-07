const bookService = require("../../service/myShelf/bookRegisterService");


module.exports.registerBooks = async (req, res) => {
    try {
        const { user_id } =req.params; 
        const { title, author, publisher, img_url }  = req.body;
  
        const registerResponse = await bookService.registerBook(
            user_id,
            title,
            author,
            publisher,
            img_url,
        );
        console.log(registerResponse);
        return res.send(registerResponse);
      
      }
    catch (err) {
      console.log("Error", err);
    }
  };