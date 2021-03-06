describe('Testing wls-alpha directive', function() {

	var $rootScope, $compile, element, scope;

	beforeEach(function() {
		module('multiview.alpha');
		module('PreprocessedTemplates');
		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			$compile = $injector.get('$compile');
			element = angular.element('<wls-alpha type="alpha" bundle="one.alphaOne_two.alphaTwo_three.alphaThree"></wls-alpha>');
			scope = $rootScope.$new();

			scope.$apply(function() {
				scope.type = "alpha";
				$compile(element)(scope);
			});
		});
	});

	it('Type should equal "alpha"', function() {
 		expect(scope.type).toEqual('alpha');
	});
});