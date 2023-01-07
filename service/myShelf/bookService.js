const pool = require("../../config/database");
//const bookProvider = require('../../provider/myShelf/bookProvider');
const bookDao = require("../../dao/myShelf/bookDao");


// Service: Create, Update, Delete 비즈니스 로직 처리
exports.registerBook = async (user_id, title) => {     //, register, status 제외?
    const connection = await pool.getConnection(async (conn) => conn);

    const bookTitleResult = await bookDao.registerBookInfo(
        connection,
        user_id, 
        title, 
        //register, 
        //status 
        );
    
    connection.release();
    return bookTitleResult[0];
}

exports.deleteBook = async (user_id, book_id) => {    // status 제외?
    const connection = await pool.getConnection(async (conn) => conn);

    const bookIdResult = await bookDao.deleteBookInfo(
        connection,
        user_id, 
        book_id,
        //status 
        );
    
    connection.release();
    return bookIdResult[0];
}



// UMC 보고 짠 코드
// exports.registerBook = async function (user_id, title, register, status) {
//     try {
//         const registerBookInfoParams = [user_id, title, register, status];
        
//         // 이 부분 우리 DB에 맞게 수정해야 할 것 같다.
//         const connection = await pool.getConnection(async (conn) => conn);

//         const bookTitleResult = await bookDao.registerBookInfo(connection, registerBookInfoParams);

//         console.log(`추가된 책 : ${bookTitleResult[1].insertId}`)
//         connection.release();
//         return response(baseResponse.SUCCESS);


//     } catch (err) {
//         logger.error(`App - registerBook Service error\n: ${err.message}`);
//         return errResponse(baseResponse.DB_ERROR);
//     }
// };

// 삭제
// exports.deleteBook = async function (user_id, book_id, status) {
//     try {
//         const registerBookInfoParams = [user_id, book_id, status];
        
//         // 이 부분 우리 DB에 맞게 수정해야 할 것 같다.
//         const connection = await pool.getConnection(async (conn) => conn);

//         const bookIdResult = await bookDao.deleteBookInfo(connection, deleteBookInfoParams);
        
//         console.log(`추가된 책의 id : ${bookIdResult[1].insertId}`)

//         connection.release();
//         return response(baseResponse.SUCCESS);


//     } catch (err) {
//         logger.error(`App - deleteBook Service error\n: ${err.message}`);
//         return errResponse(baseResponse.DB_ERROR);
//     }
// };
