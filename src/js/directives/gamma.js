'use strict';


angular
.module('multiview.gamma', ['multiview.dataservice'])
.directive('wlsGamma', ['dataService', function(dataService) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'templates/base-tpl.html',
		controllerAs: "us",
		bindToController: true,
		link: function(scope, element, attr) {
				var ds = dataService.dataSet();
				if(!ds.hasOwnProperty('gamma')) {
					console.log('EMPTY GAMMA');
					dataService.initialize()
					.then(function(data){
						scope.us.init(data);
					});
				}
				else {
					scope.us.init(ds);
				}
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
				vm.bundle.one = vm.dataset.one = data.gamma.one;
				vm.bundle.two = vm.dataset.two = data.gamma.two;
				vm.bundle.three = vm.dataset.three = data.gamma.three;
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