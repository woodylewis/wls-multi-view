'use strict';


angular
.module('multiview.alpha', [])
.directive('wlsAlpha', function() {
	return {
		restrict: 'AE',
		scope: {
			type: '=',
			bundle: '='
		},
		templateUrl: 'templates/alpha-tpl.html',
		controllerAs: "us",
		bindToController: true,
		controller: function($scope, $document) {
			var vm = this;
				vm.dataset = {};
				vm.bundle = {};

			$document.ready(function() {
				var thisDirective = $document.find('wls-alpha');
					vm.type = thisDirective[0].attributes.type.value;
					var theBundle = thisDirective[0].attributes.bundle.value,
						bundleFields = theBundle.split('_');

					bundleFields
					.map(function(value) {
						var fieldElements = value.split('.');
						vm.bundle[fieldElements[0]] = fieldElements[1];
						vm.dataset[fieldElements[0]] = fieldElements[1];
					});
			});

			vm.send = function() {	
				var payload = {};
				payload.type = vm.type;
				payload.bundle = vm.dataset;
				$scope.$emit('sendBundle', payload);
			};

			$scope.$on('beamBundle', function(event, args) {
				vm.bundle = args;
		  	});
		}
	};
});