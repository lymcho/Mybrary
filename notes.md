what was I going to do?

what is the structure

what does layout.ejs do?
currently it looks like it's some kind of shell

everyone in the views gets the same exact template
good for html header footer stuff



how I connected to mongo
0. get a connection string from mongo atlas
"mongodb+srv://lymcho:<password>@cluster0-5fhp8.mongodb.net/test?"
1. install mongoose
2. copy set up code

const mongoose = require("mongoose");
var url = "mongodb+srv://lymcho:Lenylair6!@cluster0-5fhp8.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true });
var db = mongoose.connection

3. print sucess msgs

db.on("error", error => console.error(error))
db.once("open", () => console.log("connected to mongo db"))

