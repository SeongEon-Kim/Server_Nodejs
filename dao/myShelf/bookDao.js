module.exports.registerBookInfo = async (connection, user_id, title) => {    //, register, status 없이,,?
    const registerBookInfoQuery = `
            INSERT INTO BookInfo(user_id, title, register, status) 
            VALUES(?, ?, 1, 1);
        `;
    const registerBookInfoRow = await connection.query(
      registerBookInfoQuery, [
      user_id,
      title,
      1,          // register, 대신에 1로?
      1
      ]);
    
    return registerBookInfoRow[0];
  };
  
  module.exports.deleteBookInfo = async (connection, user_id, book_id) => {    // register, status 없이?
          const deleteBookInfoQuery = `
                UPDATE BookInfo 
                SET status = 0 
                HERE user_id = ? AND book_id = ?;   
            `;
    const deleteBookInfoRow  = await connection.query(
      deleteBookInfoQuery, [
      user_id,
      book_id
      ]);
    
    return deleteBookInfoRow[0];
  };
  
  
  // 책 등록
  // async function registerBookInfo(connection, registerBookInfoParams) {
  //     const registerBookInfoQuery = `
  //           INSERT INTO BookInfo(user_id, title, register, status) 
  //           VALUES(?, ?, ?, 1);
  //       `;
  //     const registerBookInfoRow = await connection.query(
  //       registerBookInfoQuery,
  //       registerBookInfoParams
  //     );
    
  //     return registerBookInfoRow;
  //   }
  // // 책 삭제
  // async function deleteBookInfo(connection, deleteBookInfoParams) {
  //     const deleteBookInfoQuery = `
  //           UPDATE BookInfo 
  //           SET status = 0 
  //           WHERE user_id = ? AND book_id = ?;   
  //       `;
  //     const deleteBookInfoRow = await connection.query(
  //       deleteBookInfoQuery,
  //       deleteBookInfoParams
  //     );
    
  //     return deleteBookInfoRow;
  //   }
  
  //   module.exports = {
  //     registerBookInfo,
  //     deleteBookInfo,
  //   };