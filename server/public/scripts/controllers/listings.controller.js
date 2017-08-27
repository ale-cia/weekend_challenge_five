app.controller('ListingsController', ['ListingsService', function(ListingsService){
      console.log('Listings Controller loaded');

      var self = this;
      self.listings = ListingsService.newListing;
  }]);
  