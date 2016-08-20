var app = angular.module('shoppingCart', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'home_controller'
      })
      $locationProvider.html5Mode(true);
});
