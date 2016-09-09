var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
    name: String,
    type: String
});
mongoose.model('Books', booksSchema);
