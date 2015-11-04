'use strict';

angular.module('multiview', [
	'ui.router',
  'multiview.eventBus',
	'multiview.alpha',
  'multiview.beta'
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
        'alpha' : { templateUrl: 'partials/alpha.html' },
        'beta' : { templateUrl: 'partials/beta.html' },
        'gamma' : { templateUrl: 'partials/gamma.html'}
      }
    });
}])
.run(['$state', function($state) {
  $state.go('main');
}]);
