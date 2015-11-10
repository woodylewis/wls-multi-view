describe('EventBus', function() {
	var foo, controller, scope;
	beforeEach(module('multiview'));
	beforeEach(inject(function (_foo_, $controller, $rootScope) {
		foo = _foo_;
		scope = $rootScope.$new();
		controller = $controller('EventBus', {
			$scope: scope
		});
	}));

	it('assigns a foo to the controller', function() {
		expect(controller.foo).to.be.an.instance of(foo);
	});
});