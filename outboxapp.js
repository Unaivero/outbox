var app = angular.module('OutboxApp', ['ngRoute']);

 app.config(function($routeProvider) { $routeProvider
   .when('/outbox', {
      templateUrl: 'outboxhome.html',
      controller: 'HomeController'
 })
   .when('/outbox/:id', {
      templateUrl: 'outboxemail.html',
      controller: 'EmailController'   
     }) 
   .otherwise({
      redirectTo: '/outbox' 
 });
 });
