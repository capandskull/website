angular.module('MasterController', [])

.controller('MasterController', function($scope, $rootScope) {

	$scope.title = null;

	var init = function() {
		console.log($rootScope.title);
	}
	init();

});