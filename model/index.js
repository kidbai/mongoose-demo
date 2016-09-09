var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books');

require('./books');

exports.Books =  mongoose.model('Books');
