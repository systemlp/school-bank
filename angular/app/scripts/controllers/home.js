'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp').controller('homeCtrl', function($scope, $rootScope, $location) {
  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  var myChart = echarts.init(document.getElementById('officers-chart'));
  myChart.setOption({
    color: ['#FE9E1E'],
    title: {},
    tooltip: {},
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      width: '75%'
    },
    xAxis: {
      type: 'category',
      data: [
        "总站\n长",
        "副站\n长",
        "常务\n执行\n副站长",
        "常务\n干事",
        "项目\n推进\n试点",
        "技术\n顾问",
        "分站\n点",
        "分站\n长",
        "顾问"
      ],
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        barWidth: '50%',
        data: [
          2,
          2,
          1,
          1,
          6,
          1,
          1,
          1,
          1
        ]
      }
    ]
  });
});
