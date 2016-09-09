var express = require('express');
var router = express.Router();
var models = require('../model/index');
var Books = models.Books;

/* GET users listing. */
router.get('/list', function(req, res, next) {
    console.log(Books.find());
    Books.find(function(err, books){
        res.send(books);
    });
    // res.send(Books.find());
});

module.exports = router;
