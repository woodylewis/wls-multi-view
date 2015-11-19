describe('Testing wls-alpha directive', function() {

	beforeEach(angular.mock.module("multiview.alpha"));

	describe("template", function() {
		var $compile, $scope, $httpBackend, element, template, controller;

		beforeEach(module('PreprocessedTemplates'));

		beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
				$httpBackend = _$httpBackend_;
				$httpBackend
				.when('GET','json/data.json')
				.respond(200, {'foo':'bar'});
				$compile = _$compile_;
				$scope = _$rootScope_.$new();
				element = angular.element('<wls-alpha></wls-alpha>');
				template = $compile(element)($scope);
				$scope.$digest();
				controller = element.controller;
		}));

		it('should render as passed in by $scope', 
		inject(function() {
				var templateAsHtml = template.html();
				expect(templateAsHtml).toContain('us.bundle.one');
		}));

		it('should have a valid controller', function() {
			expect(typeof controller).toEqual('function');
		});
	});
});