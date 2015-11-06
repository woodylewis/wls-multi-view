'use strict';


angular
.module('multiview.alpha', [])
.directive('wlsAlpha', function() {
	return {
		restrict: 'AE',
		scope: {
			bundle: '='
		},
		templateUrl: 'templates/send-tpl.html',
		controllerAs: "us",
		bindToController: true,
		controller: function($scope, $document) {
			var vm = this;
			$document.ready(function() {
				vm.doc = $document.find('wls-alpha');
				vm.proxyBundle = vm.doc[0].attributes.bundle.value;
				console.log(vm.proxyBundle);
			});

			vm.bundle = {};
			vm.bundle.show = 'alpha';

			vm.show = function() {
				return vm.bundle.show;
			};

			vm.send = function() {	
				vm.bundle.show = 'alpha';
				$scope.$emit('alphaEvent', vm.bundle);
			};

			$scope.$on('alphaResponse', function(event, args) {
				vm.bundle.show = args.show;
		  	});

		  	$scope.$on('betaResponse', function(event, args) {
				vm.bundle.show = args.show;
		  	});
		}
	};
});