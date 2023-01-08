require("dotenv").config();
const mysql = require("mysql2/promise");



const pool = mysql.createPool(config);

module.exports = pool;
