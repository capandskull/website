angular.module('DataService', [])

.factory('DataService', function($http) {
	return {

		skulls: function() {
			return $http({
				method: 'GET',
				url: '/storage/skulls.json',
			})
		},

	}

});