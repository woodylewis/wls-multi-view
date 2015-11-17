describe('Testing dataService', function() {
		var initUrl = 'json/data.json';
		var $httpBackend, service;

		beforeEach(module('multiview.dataservice'));

		beforeEach(inject(function(dataService, _$httpBackend_){ 
			service = dataService;
			$httpBackend = _$httpBackend_;
		}));

		it('should succeed', function() {
			/*
			$httpBackend.expectGET(initUrl, {
				"foo":"bar"
			}).respond({});
			*/
			$httpBackend
			.when('GET', initUrl)
			.respond(200, {foo: 'bar'});
			//console.log(service);	
			//$httpBackend.flush();
		});
});