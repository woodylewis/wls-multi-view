'use strict';

angular.module('multiview', [
	'ui.router',
  'multiview.eventBus',
	'multiview.alpha',
  'multiview.beta',
  'multiview.gamma'
])
.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
  .hashPrefix('!');

  $stateProvider
    .state('main', {
      url: "/",
      views: {
        'alpha' : { template: '<wls-alpha></wls-alpha>' },
        'beta' : { template: '<wls-beta></wls-beta>' },
        'gamma' : { template: '<wls-gamma></wls-gamma>'}
      }
    });
}])
.run(['$state', function($state) {
  $state.go('main');
}]);
