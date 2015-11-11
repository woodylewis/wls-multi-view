'use strict';

angular
.module('multiview.eventBus', [])
.controller('EventBus', EventBus);

function EventBus($scope) {
	var vm = this; 

	vm.reset = function() {
		$scope.$broadcast('reset');
	};

  	$scope.$on('sendBundle', function(event, args) {
  		var theType = args.type,
  			theBundle = {};
  			theBundle.one = args.bundle.one;
  			theBundle.two = args.bundle.two;
  			theBundle.three = args.bundle.three;

		  $scope.$broadcast('beamBundle', theBundle);
  	});
}
