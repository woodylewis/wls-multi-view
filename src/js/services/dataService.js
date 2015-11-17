angular.module('multiview.dataservice', [])
.factory('dataService', ['$q', '$http', function($q, $http) {
	var initUrl = 'json/data.json';
	var dsDataSet = {};

	var initialize = function() {
		var deferred = $q.defer();

		$http.get(initUrl)
		.success(function(data) {
			deferred.resolve(data);
			dsDataSet = data;
		})
		.error(function(reason) {
			deferred.reject(reason);
			console.error(reason);
		});
		return deferred.promise;
	};

	var dataSet = function() {
		return dsDataSet;
	};

	return {
		initialize: function() {
			return initialize();
		},
		dataSet: function() {
			return dataSet();
		}
	};
}]);