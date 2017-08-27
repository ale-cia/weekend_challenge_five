app.controller('RentalsController', ['RentalsService', function(RentalsService){
    console.log('Rentals Controller loaded');

    var self = this;
    self.rentals = RentalsService.newRental;
    //object created in services
}]);