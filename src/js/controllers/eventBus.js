'use strict';

angular
.module('multiview.eventBus', [])
.controller('EventBus', EventBus);

function EventBus($scope) {
  	$scope.$on('alphaEvent', function(event, args) {
  		console.log('EventBus received alphaEvent', args);
		$scope.$broadcast('alphaResponse', args);
  	});

  	$scope.$on('betaEvent', function(event, args) {
  		console.log('EventBus received betaEvent', args);
		$scope.$broadcast('betaResponse', args);
  	});
}
