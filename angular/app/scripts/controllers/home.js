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
  // 显示标题，图例和空的坐标轴
  myChart.setOption({
    // color: #FE9E1E,
    // tooltip: {},
    // xAxis: {
    //   data: [
    //     "总站长",
    //     "副站长",
    //     "常务执行副站长",
    //     "常务干事",
    //     "项目推进试点",
    //     "技术顾问",
    //     "分站点",
    //     "分站长",
    //     "顾问"
    //   ],
    //   color: #fff
    // },
    // yAxis: {},
    // series: [
    //   {
    //     type: 'bar',
    //     data: [
    //       5,
    //       20,
    //       36,
    //       10,
    //       10,
    //       20,
    //       17,
    //       18,
    //       19
    //     ]
    //   }
    // ],
    color: ['#FE9E1E'],
    title: {},
    tooltip: {},
    legend: {},
    grid: {
       left: '3%',
       right: '4%',
       bottom: '3%',
       containLabel: true,
       width:'75%'
   },
    xAxis: {
      type: 'category',
      data: [
        "衬衫",
        "羊毛衫",
        "雪纺衫",
        "裤子",
        "高跟鞋",
        "袜子"
      ],
      axisLine:{
        lineStyle:{
          color:'#fff'
        }
      },
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      axisLine:{
        lineStyle:{
          color:'#fff'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        barWidth: '50%',
        data: [
          5,
          20,
          36,
          10,
          10,
          20
        ]
      }
    ]
  });
});
