'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp').controller('loginCtrl', function($scope, $rootScope, $location) {
  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  $scope.userLogin = function() {
    var name = $scope.name;
    var pwd = $scope.password;
    if (!name) {
      $scope.nameRequired = true;
    } else {
      $scope.nameRequired = false;
    }
    if (!pwd) {
      $scope.pwdRequired = true;
    } else {
      $scope.pwdRequired = false;
    }
    if (name && pwd) {
      $scope.nameRequired = false;
      $scope.pwdRequired = false;
      $rootScope.currentUser = {
        'name': name
      };
      // 发送登录请求
      $location.path("main");
    }
  };
});
