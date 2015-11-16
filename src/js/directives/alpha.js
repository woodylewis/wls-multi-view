'use strict';


angular
.module('multiview.alpha', ['multiview.dataservice'])
.directive('wlsAlpha', ['dataService', function(dataService) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'templates/base-tpl.html',
		controllerAs: "us",
		bindToController: true,
		link: function(scope, element, attr) {
			var result = dataService.initialize()
			.then(function(result) {
				scope.us.init(result);
			});
		},
		controller: function($scope, $document) {
			var vm = this;
				vm.dataset = {};
				vm.bundle = {};

			vm.send = function() {	
				var payload = {};
				payload.bundle = vm.dataset;
				$scope.$emit('sendBundle', payload);
			};

			vm.init = function(data) {
				vm.bundle.one = vm.dataset.one = data.alpha.one;
				vm.bundle.two = vm.dataset.two = data.alpha.two;
				vm.bundle.three = vm.dataset.three = data.alpha.three;
			};

			$scope.$on('beamBundle', function(event, args) {
				vm.bundle = args;
		  	});

		  	$scope.$on('reset', function(event, args) {
				vm.bundle = vm.dataset;
		  	});
		}
	};
}]);