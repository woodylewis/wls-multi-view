'use strict';

angular
.module('multiview.alpha', [])
.directive('wlsAlpha', function() {
	return {
		restrict: 'AE',
		template: '<span><div ng-bind="us.bundle.alpha"></div><div ng-bind="us.show()"></div></span>',
		scope: {
			bundle: '='
		},
		controllerAs: "us",
		bindToController: true,
		controller: function($scope) {
			$scope.$emit('alphaEvent');
			var vm = this;
			vm.show = function() {
				return vm.bundle.alpha === 'First' ? 'dog' : 'cat';
			};	
		}
	};
});