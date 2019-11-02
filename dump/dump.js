//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());
//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//use assets from public
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// app.use('/', indexRouter);
// app.use('/users', usersRouter);



//data objs
var products = [
    { title: "product" },
    { title: "product2" },
    { title: "product3" },
]

app.post("/addproduct", (req, res) => {

    var newproduct = req.body.newproduct;
    products.push({ title: newproduct });
    res.send("added a new product yo");
    res.redirect("/shop");

});

//display a list of products on home page
app.get("/shop", (req, res) => {

        //testing it out first
        res.render("index", {
            products: products
        });
    })
    //post request, add a product

app.get("/pricing", (req, res) => {
    //testing it out first
    res.render("pricing");

})




//
















//when app goes to any product page, it's going to display the product name
// app.get("/product/:productname", (req, res) => {
//     var productname = req.params.productname;
//     if (productname === "product3") {
//         res.render("product", {
//             productname: productname
//         });
//     } else {
//         //testing it out first
//         res.render("product_not_available", {
//             productname: productname
//         });
//     }



// })







//when going to category page
// app.get('/category/:categoryname', function(req, res) {
//     var categoryname = req.params.categoryname;
//     //inputs these data into the index.pug file
//     //going to change things inside there

//     res.render("category", {
//         //assigning what users put in the url into the actual hmtl dynamically
//         catName: categoryname
//     });
//     //
//     // res.send("what?")
// })



app.listen(3000, () => {
    console.log("connected")
})

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

// module.exports = app;
//listen to changes on server
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))