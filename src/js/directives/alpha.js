'use strict';

angular
.module('multiview.alpha', [])
.directive('wlsAlpha', function() {
	return {
		restrict: 'AE',
		template: '<span><div ng-bind="us.bundle.alpha"></div><div ng-bind="us.show()"></div></span>',
		controllerAs: "us",
		bindToController: true,
		controller: function($scope) {
			var vm = this;
			vm.bundle = {};
			vm.bundle.alpha = 'alpha';

			vm.show = function() {
				return vm.bundle.alpha;
			};

		  	$scope.$on('betaResponse', function(event, args) {
				console.log('alpha handled betaResponse', args);
		  	});
		}
	};
});