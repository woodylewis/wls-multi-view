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
			vm.bundle.show = 'alpha';

			vm.show = function() {
				return vm.bundle.show;
			};

			vm.send = function() {	
				vm.bundle.show = 'alpha';
				$scope.$emit('alphaEvent', vm.bundle);
			};

			$scope.$on('alphaResponse', function(event, args) {
				vm.bundle.show = args.show;
		  	});

		  	$scope.$on('betaResponse', function(event, args) {
				vm.bundle.show = args.show;
		  	});
		}
	};
});