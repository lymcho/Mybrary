//var createError = require('http-errors');
const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const mongoose = require("mongoose");
var url = "mongodb+srv://lymcho:Lenylair6!@cluster0-5fhp8.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true });
var db = mongoose.connection

db.on("error", error => console.error(error))
db.once("open", () => console.log("connected to mongo db"))




var indexRouter = require('./routes/index');
app.use(express.static("public"));
app.use(expressLayouts);
app.use("/", indexRouter);







app.listen(3000, () => {
    console.log("connected")
})