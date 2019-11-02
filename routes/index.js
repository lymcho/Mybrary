//set up router
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
    // res.send("yo")
});
router.get('/meow', function(req, res, next) {
    res.render('temp');
    // res.send("yo")
});

module.exports = router;