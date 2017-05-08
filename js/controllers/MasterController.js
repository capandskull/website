angular.module('MasterController', [])

.controller('MasterController', function($scope, $rootScope) {

	$scope.title = null;

	$scope.url = window.location.href;

});