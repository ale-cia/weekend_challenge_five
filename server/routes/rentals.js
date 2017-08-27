var express = require('express');
var router = express.Router();
// bring in our Mongoose model
// var Listings = require('../models/listings.schema.js');
var Rentals = require('../models/rentals.schema.js');


router.get('/', function(req, res) {
    // find all of the people in the collection
    Rentals.find({}, function(err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            console.log('found data: ', data);            
            res.send(data);
        }
    });
});


module.exports = router;