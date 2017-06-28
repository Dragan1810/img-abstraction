const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const SearchSchema = new Schema({
    Search:String
});

const SearchModel = mongoose.model('search',SearchSchema);

module.exports = SearchModel;