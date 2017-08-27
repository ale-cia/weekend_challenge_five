var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listings = new Schema({
    cost: { type: String, required: true, unique: true},
    sqft: { type: Number },
    city: { type: String, requried: true, unique: true}    
});

module.exports = mongoose.model('listings', listings);