'use strict';


angular
.module('multiview.alpha', ['multiview.alphaService'])
.directive('wlsAlpha', ['alphaService', function(alphaService) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'templates/base-tpl.html',
		controllerAs: "us",
		bindToController: true,
		link: function(scope, element, attr) {
			var result = alphaService.initialize()
			.then(function(result) {
				scope.us.bundle.one = result.alpha.one;
				scope.us.bundle.two = result.alpha.two;
				scope.us.bundle.three = result.alpha.three;
			});
		},
		controller: function($scope, $document) {
			var vm = this;
				vm.dataset = {};
				vm.bundle = {};

			vm.send = function() {	
				var payload = {};
				payload.type = vm.type;
				payload.bundle = vm.dataset;
				$scope.$emit('sendBundle', payload);
			};

			$scope.$on('beamBundle', function(event, args) {
				vm.bundle = args;
		  	});

			//-----THIS DOES NOT RESPOND TO INITIAL CONTROLLER BROADCAST
		  	$scope.$on('reset', function(event, args) {
				vm.bundle = vm.dataset;
				console.log('alpha reset');
		  	});
		}
	};
}]);