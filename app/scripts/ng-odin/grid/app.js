/**
 * Created by vivi.jiang on 8/11/2014.
 */
'use strict';

angular.module('ng.odin.grid', [
	'ng.odin.grid.services',
	'ng.odin.grid.directives'
])
	.controller('test', function($scope) {
		$scope.hello = 'hello';
	});