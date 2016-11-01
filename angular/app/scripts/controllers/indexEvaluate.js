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

  $('.date-picker').datepicker({
      language:"zh-CN",
      // rtl: App.isRTL(),
      // autoclose: true
  });

  // $scope.$watch("date", (newValue) => {
  //   console.log(newValue);
  // });
  $scope.evaluteItem = [
    {name: '王强', eVal1: 1, eVal2: 2, eVal3: 3, eVal4: 4, eVal5: 5, },
    {name: '李强', eVal1: 1, eVal2: 2, eVal3: 3, eVal4: 4, eVal5: 5, },
    {name: '赵强', eVal1: 1, eVal2: 2, eVal3: 3, eVal4: 4, eVal5: 5, },
    {name: '孙玲', eVal1: 1, eVal2: 2, eVal3: 3, eVal4: 4, eVal5: 5, },
    {name: '张欢', eVal1: 1, eVal2: 2, eVal3: 3, eVal4: 4, eVal5: 5, },
  ];
  $scope.evaluateRemarks = [
    '答应别人的事情要做到',
    '按时上下学',
    '穿着整洁大方',
    '上课认真听讲',
    '尊重老师'
  ];
  $scope.studyStations = ['学习站1', '学习站2', '学习站3'];
  $scope.specialEvaluates = ['序号', '姓名', '日期', '等级', '原由', '获得使觉币', '修改', '删除'];
  $scope.specialEvaluteVals = [
    {name: '王强', date: '2016年5月', level: '一等级', reason: '学习成绩优异', coin: 10},
    {name: '李强', date: '2016年5月', level: '二等级', reason: '', coin: 2},
    {name: '赵强', date: '2016年5月', level: '三等级', reason: '', coin: 2},
    {name: '孙玲', date: '2016年5月', level: '四等级', reason: '', coin: 2},
    {name: '张欢', date: '2016年5月', level: '五等级', reason: '', coin: 2}
  ]
});
