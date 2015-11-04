'use strict';

angular
.module('multiview.beta', [])
.directive('wlsBeta', function() {
	return {
		restrict: 'AE',
		templateUrl: 'templates/send-tpl.html',
		controllerAs: "us",
		bindToController: true,
		controller: function($scope) {
			var vm = this;
			vm.bundle = {};
			vm.bundle.alpha = 'alpha';
			vm.bundle.beta = 'beta';

			vm.show = function() {
				return vm.bundle.beta;
			};

			vm.send = function() {	
				console.log('send function from beta directive');
				$scope.$emit('betaEvent', vm.bundle);
			};

			$scope.$on('alphaResponse', function(event, args) {
				console.log('BETA ALPHA');
				vm.bundle.beta = vm.bundle.beta === 'beta' ? args.alpha : args.beta;
		  	});

		  	$scope.$on('betaResponse', function(event, args) {
				vm.bundle.beta = args.beta;
		  	});
		}
	};
});