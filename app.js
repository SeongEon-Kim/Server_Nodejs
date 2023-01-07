require("dotenv").config();
const dotenv = require('dotenv');
const express = require("express")
const app = express();
const mysql = require('mysql')
const shelfRouter = require('./router/myShelf/shelfRoute')
const searchBookRouter = require('./router/myShelf/searchBook');
const timerRouter = require("./router/myShelf/timerRoute");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const registerBookRouter = require("./router/myShelf/registerBook");
const deleteBookRouter = require("./router/myShelf/deleteBook");

app.listen(3000, () => {
  console.log("Connected!!!");
});


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride());



app.use('/shelf', shelfRouter);
app.use('/search', searchBookRouter);
app.use("/timer", timerRouter);

app.use("/register", registerBookRouter);
app.use("/delete", deleteBookRouter);

module.exports = app;
