app.service('RentalsService', ['$http', function($http){
   console.log('Person service loaded');
   
   var self = this;
   self.newRental = { list: [] };

   self.addRental = function(){
       $http.get('/rentals').then(function(response){
           self.newRental.list = response.data;
           console.log('get response: ', self.newRental);
       });
   };
 self.addRental();
}]);