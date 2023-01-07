require("dotenv").config();
const mysql = require("mysql2/promise");



const config = 
{
    host: `${process.env.DB_HOST}`,
    user:`${process.env.DB_USER}`,
    port: `3306`,
    password: `${process.env.DB_PASS}`,
    database: `${process.env.DB_NAME}`
    // host: `bookmark.ceouogj5ugiy.ap-northeast-2.rds.amazonaws.com`,
    // user: `admin`,
    // port: `3306`,
    // password: `bookmark123`,
    // database: `bookMark_DB`,
}

const pool = mysql.createPool(config);

module.exports = pool;
