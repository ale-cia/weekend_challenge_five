app.service('ListingsService', ['$http', function($http){
    console.log('Person service loaded');
    
    var self = this;
    self.newListing = { list: [] };
 
    self.addListing = function(){
        $http.get('/listings').then(function(response){
            self.newListing.list = response.data;
            console.log('get response: ', self.newListing);
        });
    };
  self.addListing();
 }]);