'use strict';

/**
 * @ngdoc overview
 * @name learnAngularApp
 * @description
 * # learnAngularApp
 *
 * Main module of the application.
 */
// .config([
//   '$rootScope',
//   function($rootScope) {
//     $rootScope.$on('$locationChangeStart', function(event, next, current) {
//       // console.log("user--->" + $rootScope.currentUser);
//       // console.log("userType--->" + $rootScope.currentUserType);
//       $rootScope.hideNavAndFoot = false;
//       if (next.split("/").reverse()[0] === "login") {
//         $rootScope.hideNavAndFoot = true;
//       }
//       if (!$rootScope.currentUser) {
//         $rootScope.showLoading = false;
//         $rootScope.currentUser = null;
//         if (location.href.indexOf("appDetail") !== -1 || location.href.indexOf("jbrDetails") !== -1 || location.href.indexOf("idea") !== -1) {
//           $rootScope.location = location.href;
//           $state.go("login");
//         } else if (versionProvider.internalOnly) {
//           $state.go("login");
//         }
//       }
//     });
//   }
// ])
angular.module('learnAngularApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider.when('/', {
      templateUrl: 'views/login.html',
      controller: 'loginCtrl',
      controllerAs: 'login'
    }).when('/home', {
      templateUrl: 'views/home.html',
      controller: 'homeCtrl',
      controllerAs: 'home'
    }).when('/standardSetting', {
      templateUrl: 'views/standardSetting.html',
      controller: 'standardSettingCtrl',
      controllerAs: 'standardSetting'
    }).when('/indexEvaluate', {
      templateUrl: 'views/indexEvaluate.html',
      controller: 'indexEvaluateCtrl',
      controllerAs: 'indexEvaluate'
    }).when('/wishManagement', {
      templateUrl: 'views/wishManagement.html',
      controller: 'wishManagementCtrl',
      controllerAs: 'wishManagement'
    }).when('/main', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    }).when('/eventBind', {
      templateUrl: 'views/eventBind.html',
      controller: 'EventBindCtrl',
      controllerAs: 'eventBind'
    }).when('/form_example', {
      templateUrl: 'views/form_example.html',
      controller: 'formExampleCtrl',
      controllerAs: 'form_example'
    }).when('/sjb_manage', {
      templateUrl: 'views/sjb_manage.html',
      controller: 'sjbManageCtrl',
      controllerAs: 'sjb_manage'
    })
    // .when('/form_example/error_msg', {
    //   templateUrl: 'views/templates/errorMsg.html',
    //   controller: 'formExampleCtrl',
    //   controllerAs: 'form_example'
    // })
      .otherwise({redirectTo: '/'});
  }
]).run(function($rootScope, $location) {
  $rootScope.$on('$locationChangeStart', function(event, next, current) {
    console.log("user--->" + $rootScope.currentUser);
    $rootScope.hideNav = false;
    $rootScope.isLogin = false;
    $rootScope.menuClose=false;
    if (next.split("/").reverse()[0] != '') {
      $rootScope.hideNav = true;
      $rootScope.isLogin = true;
    }
    if (!$rootScope.currentUser) {
      // $location.path("/");
    }
  });
});
// .config(function($locationProvider) {
//   $locationProvider.html5Mode(true);
// })
