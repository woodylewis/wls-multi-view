describe('Testing wls-alpha directive', function() {

	beforeEach(angular.mock.module("multiview.alpha"));

	describe("template", function() {
		var $compile, $scope, $httpBackend;

		beforeEach(module('PreprocessedTemplates'));

		beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
				$httpBackend = _$httpBackend_;
				$compile = _$compile_;
				$scope = _$rootScope_.$new();
		}));

		it('should render as passed in by $scope', 
		inject(function() {
				$httpBackend.whenGET('json/data.json').respond("");
				var template = $compile('<wls-alpha></wls-alpha>')($scope);
				$scope.$digest();
				var templateAsHtml = template.html();
				expect(templateAsHtml).toContain('us.bundle.one');
		}));
	});
});