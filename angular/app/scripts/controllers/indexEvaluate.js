'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:indexEvaluateCtrl
 * @description
 * # MainCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp').controller('indexEvaluateCtrl', function($scope, $rootScope, $location) {
  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  $scope.grade = ['一年级', '二年级', '三年级', '四年级'];
  $scope.class = ['一班', '二班', '三班', '四班'];

  // $('#datetimepicker1').datetimepicker({
  //    locale: "de",
  //    rtl: App.isRTL(),
  //    autoclose: true
  // });
  $('.date-picker').datepicker({
      language:"zh-CN",
      // rtl: App.isRTL(),
      // autoclose: true
  });

  $scope.$watch("date", (newValue) => {
    console.log(newValue);
  });
});
