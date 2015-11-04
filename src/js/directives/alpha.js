'use strict';

angular
.module('multiview.alpha', [])
.directive('wlsAlpha', function() {
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
				return vm.bundle.alpha;
			};

			vm.send = function() {	
				console.log('send function from alpha directive');
				$scope.$emit('alphaEvent', vm.bundle);
			};

			$scope.$on('alphaResponse', function(event, args) {
				console.log('ALPHA ALPHA');
				vm.bundle.alpha = vm.bundle.alpha === 'beta' ? args.alpha : args.beta;
				//vm.show();
		  	});

		  	$scope.$on('betaResponse', function(event, args) {
				vm.bundle.alpha = args.beta;
		  	});
		}
	};
});