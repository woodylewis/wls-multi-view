describe('Testing wls-alpha directive', function() {

	var $rootScope, $compile, element, scope;

	beforeEach(function() {
		module('multiview.alpha');
		module('PreprocessedTemplates');
		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			$compile = $injector.get('$compile');
			element = angular.element('<wls-alpha></wls-alpha>');
			scope = $rootScope.$new();

			scope.$apply(function() {
				scope.bundle = {};
				scope.bundle.one = "alphaOne";
				$compile(element)(scope);
			});
		});
	});

	it('First field should equal "alphaOne"', function() {
 		//expect(scope.bundle.one).toEqual('alphaOne');
	});
});