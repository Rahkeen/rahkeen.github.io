var app = angular.module('MySite', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/about', {
        controller: 'MainController',
        templateUrl: 'views/about.html'
    })
    .when('/projects', {
        controller: 'MainController',
        templateUrl: 'views/projects.html'
    });
});