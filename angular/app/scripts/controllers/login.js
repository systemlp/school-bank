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
  $scope.openLogin = true;
  $scope.userLogin = function() {
    var name = $scope.name;
    var pwd = $scope.password;
    $scope.nameRequired = !name;
    $scope.pwdRequired = !pwd;
    if (name && pwd) {
      $rootScope.currentUser = {
        'name': name
      };
      // 发送登录请求
      $location.path("main");
    }
  };
  $scope.openReg = function() {
    $scope.openLogin = false;
    $scope.isRegister = true;
  };
  $scope.cancelReg = function() {
    $scope.isRegister = false;
    $scope.openLogin = true;
  };
});
