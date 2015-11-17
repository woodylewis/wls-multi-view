'use strict';

angular
.module('multiview.eventBus', ['multiview.dataservice'])
.controller('EventBus', ['$scope', 'dataService', function($scope, dataService) {
	var vm = this; 

	vm.reset = function() {
		$scope.$broadcast('reset');
	};

	var listener = $scope.$on('sendBundle', function(event, args) {
			var theBundle = {};
			theBundle.one = args.bundle.one;
			theBundle.two = args.bundle.two;
			theBundle.three = args.bundle.three;

	  $scope.$broadcast('beamBundle', theBundle);
	});

	$scope.$on('destroy', listener);

  vm.reset();
  //---THIS PRESENTS THE INITIALIZED SERVICE TO THE DIRECTIVES
	dataService.initialize();
}]);
