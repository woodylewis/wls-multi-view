'use strict';

angular.module('multiview', [
	'ui.router',
	'multiview.mainCtrl'
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
        "state" : { templateUrl: "partials/main.html" }
      }
    });
}])
.run(['$state', function($state) {
  $state.go('main');
}])
.controller('appCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.goHome = function () {
    $state.go('main');
  };
}]);
