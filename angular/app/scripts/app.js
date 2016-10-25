'use strict';

/**
 * @ngdoc overview
 * @name learnAngularApp
 * @description
 * # learnAngularApp
 *
 * Main module of the application.
 */
angular
  .module('learnAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function($rootScope) {
    console.log($rootScope);
    $rootScope.$on('$locationChangeStart', function(e, next, current) {
      console.log(e);
      console.log(next);
      console.log(current);
    })
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      // .when('/login', {
      //   templateUrl: 'views/login.html',
      //   controller: 'LoginCtrl',
      //   controllerAs: 'login'
      // })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/eventBind', {
        templateUrl: 'views/eventBind.html',
        controller: 'EventBindCtrl',
        controllerAs: 'eventBind'
      })
      .when('/form_example', {
        templateUrl: 'views/form_example.html',
        controller: 'formExampleCtrl',
        controllerAs: 'form_example'
      })
      // .when('/form_example/error_msg', {
      //   templateUrl: 'views/templates/errorMsg.html',
      //   controller: 'formExampleCtrl',
      //   controllerAs: 'form_example'
      // })
      .otherwise({
        redirectTo: '/'
      });
  })
  // .config(function($locationProvider) {
  //   $locationProvider.html5Mode(true);
  // })
