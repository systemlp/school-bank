'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp').controller('loginCtrl', function($scope) {
  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  $scope.userLogin = function() {
    var name = $scope.name;
    var pwd = $scope.password;
    if (!name) {
      $scope.pwdRequired = false;
      $scope.nameRequired = true;
    } else if (!pwd) {
      $scope.nameRequired = false;
      $scope.pwdRequired = true;
    } else {
      $scope.nameRequired = false;
      $scope.pwdRequired = false;
      // 发送登录请求
    }
  };
});
