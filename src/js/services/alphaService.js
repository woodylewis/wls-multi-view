angular.module('multiview.alphaService', [])
.factory('alphaService', ['$q', '$http', function($q, $http) {
	var  initUrl = 'json/data.json';

	var initialize = function() {
		var deferred = $q.defer();

		$http.get(initUrl)
		.success(function(data) {
			deferred.resolve(data);
		})
		.error(function(reason) {
			deferred.reject(reason);
		});
		return deferred.promise;
	};

	return {
		initialize: function() {
			return initialize();
		}
	};
}]);