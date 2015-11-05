'use strict';

angular
.module('multiview.eventBus', [])
.controller('EventBus', EventBus);

function EventBus($scope) {
  	$scope.$on('alphaEvent', function(event, args) {
		$scope.$broadcast('alphaResponse', args);
  	});

  	$scope.$on('betaEvent', function(event, args) {
		$scope.$broadcast('betaResponse', args);
  	});
}
