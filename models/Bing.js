const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const SearchSchema = new Schema({
    Search:String
});


module.exports = mongoose.model('search',SearchSchema);