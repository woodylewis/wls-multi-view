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
			vm.bundle.show = 'beta';

			vm.show = function() {
				return vm.bundle.show;
			};

			vm.send = function() {	
				vm.bundle.show = 'beta';
				$scope.$emit('betaEvent', vm.bundle);
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