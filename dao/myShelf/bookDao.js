module.exports.registerBookInfo = async (connection, registerBookInfoParams) => {    
    const registerBookInfoQuery = `INSERT INTO BookInfo(user_id, title, author, publisher, img_url) VALUES (?, ?, ?, ?, ?);`;
    const [registerBookInfoRow] = await connection.query(
      registerBookInfoQuery, 
      registerBookInfoParams
      );
    
    return registerBookInfoRow;
  };
  
module.exports.deleteBookInfo = async (connection, deleteBookInfoParams) => {    
        const deleteBookInfoQuery = `
            UPDATE BookInfo 
            SET status = 0 
            HERE user_id = ? AND book_id = ?;   
        `;
const deleteBookInfoRow  = await connection.query(
    deleteBookInfoQuery, 
    deleteBookInfoParams);

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