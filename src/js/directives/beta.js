'use strict';

angular
.module('multiview.beta', [])
.directive('wlsBeta', function() {
	return {
		restrict: 'AE',
		template: '<span><button ng-click="us.send()">send</button><div ng-bind="us.show()"></div></span>',
		controllerAs: "us",
		bindToController: true,
		controller: function($scope) {
			var vm = this;
			vm.bundle = {};
			vm.bundle.beta = 'beta';

			vm.show = function() {
				return vm.bundle.beta;
			};

			vm.send = function() {	
				console.log('send function from beta directive');
				$scope.$emit('betaEvent', vm.bundle);
			};
		}
	};
});