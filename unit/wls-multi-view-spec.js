describe('EventBus', function() {
	var controller, scope;
	beforeEach(module('multiview.eventBus'));
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		controller = $controller('EventBus', {
			$scope: scope
		});
	}));

	it('should not be a null controller', function() {
		expect(controller).not.to.be(null);
	});
});