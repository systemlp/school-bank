'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp').controller('standardSettingCtrl', function($scope, $rootScope, $location) {
  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  $scope.settingData = [
    {id: '001',level: '一等级', score: 10, coin: 10, remarks: 'aaaa'},
    {id: '002',level: '二等级', score: 10, coin: 10, remarks: 'aaaa'},
    {id: '003',level: '三等级', score: 10, coin: 10, remarks: 'aaaa'}
  ]
});
