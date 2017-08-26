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

// router.post('/', function(req, res) {
//     console.log('new rentals to display: ', req.body);

//     // use model/constructor to make a Mongoose Object
//     var rentalToSaveToTheCollection = new Rentals(req.body);

//     // insert into our collection
//     rentalToSaveToTheCollection.save(function(err, data) {
//         console.log('saved to the collection: ', data);
//         if(err) {
//             console.log('save error: ', err);
            
//             res.sendStatus(500);
//         } else {
//             res.sendStatus(201);
//         }
        
//     });
// });

// router.put('/:id', function(req, res) {
//     var personId = req.params.id;

//     console.log('new location:', req.body.location);
//     Rental.findByIdAndUpdate(
//         { _id: personId },
//         { $set: { location: req.body.location } },
//         function(err, data) {
//             if (err) {
//                 console.log('update error: ', err);

//                 res.sendStatus(500);
//             } else {
//                 res.sendStatus(200);
//             }
//         }
//     )
// });


// router.delete('/:id', function(req, res) {
//     Rental.findByIdAndRemove(
//         { _id: req.params.id },
//         function(err, data) {
//             if (err) {
//                 console.log('delete error: ', err);

//                 res.sendStatus(500);
//             } else {
//                 res.sendStatus(200);
//             }
//         }
//     );
// });

// router.put('/:id/funtimes', function(req, res) {
//     var RentalId = req.params.id;

//     // console.log('new location:', req.body.location);
//     Rentals.findByIdAndUpdate(
//         { _id: rentalId },
//         { $set: { internetPts: req.body.internetPts } },
//         function(err, data) {
//             if (err) {
//                 console.log('update error: ', err);

//                 res.sendStatus(500);
//             } else {
//                 res.sendStatus(200);
//             }
//         }
//     )
// });
module.exports = router;