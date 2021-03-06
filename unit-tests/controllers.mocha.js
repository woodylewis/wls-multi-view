describe('Testing event bus', function() {
	beforeEach(module('multiview.eventBus'));

	describe('Testing reset function', function() {
		var scope, ctrl;

	    beforeEach(inject(function($rootScope, $controller) {
	      scope = $rootScope.$new();
	      ctrl = $controller('EventBus', {$scope: scope});
	    }));

	    it('Should have a reset function', function(){
	      expect(typeof ctrl.reset).toEqual('function');
	    });
	});

	describe('Testing broadcast of reset', function() {
		var $rootScope, $scope, $controller;

		beforeEach(function() {
			inject(function($injector) {
				$rootScope = $injector.get("$rootScope");
				$controller = $injector.get('$controller');
				$scope = $rootScope.$new();
			});
			spyOn($rootScope, '$broadcast').and.callThrough();
		});

		it('Should broadcast reset event', function() {
			$controller('EventBus', { $scope: $scope});
			expect($rootScope.$broadcast).toHaveBeenCalled();
		});
	});

});
