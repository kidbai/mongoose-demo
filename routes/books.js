var express = require('express');
var router = express.Router();
var models = require('../model/index');
var Books = models.Books;

/* GET users listing. */
router.get('/add', function(req, res, next) {
    var book = new Books({
        name: 'book' + parseInt(Math.random() * 10),
        type: 'paper'
    });
    console.log(parseInt(Math.random() * 10));
    book.save();
    res.render('bookslist');
});

module.exports = router;
