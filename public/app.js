// defines module and requirements
var app = angular.module('main',
  ['ui.router',
   'ui.bootstrap',
   'google-maps'
  ]
);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'main/template.html',
      controller: 'mainController'
    });

});