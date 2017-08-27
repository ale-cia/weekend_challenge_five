var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentalsSchema = new Schema({
    rent: { type: String, required: true, unique: true},
    sqft: { type: Number },
    city: { type: String, requried: true, unique: true}    
});

// export our model
module.exports = mongoose.model('rentals', rentalsSchema);