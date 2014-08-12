/**
 * Created by vivi.jiang on 8/12/2014.
 */

'use strict';

angular.module('GridDemo', ['ng.odin.grid'
])
    .controller('GridDemoController', function($scope) {
        $scope.hello = 'hello, this is a demo for grid';
        $scope.igor = { name: 'Igor', address: '123 Somewhere' };
        $scope.customGrid = {height: '300px',width:'500px',multiSelect:true, showFooter:true};
    });