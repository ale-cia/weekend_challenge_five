var app = angular.module('PropertiesApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html'
        //displays in a div on 'Home Page'
       }).when('/listings', {
           //#! refers to these routes
        templateUrl: 'views/listings.html',
        controller: 'ListingsController as vm' 
       }).when('/rentals', {
        templateUrl: 'views/rentals.html',
        controller: 'RentalsController as vm'
      });
}]);//config