describe('Testing dataService', function() {
	it('should do a successful get', inject(function($http, $q, $httpBackend){
		var initUrl = 'json/data.json';
		var deferred = $q.defer();
		var response = {};
		//var $httpBackend;

		beforeEach(module('multiview.dataservice'));

		//beforeEach(inject(function($injector){ 
			//$httpBackend = $injector.get('$httpBackend');

			$http.get(initUrl)
			.success(function(data) {
				response.valid = true;
			})
			.error(function(reason) {
				response.valid = false;
			});

			$httpBackend
			.when('GET', initUrl)
			.respond(200, {foo: 'bar'});

			$httpBackend.flush();

			expect(response.valid).toBe(true);
			expect(response).toEqual({foo: 'bar'});
		//}));
	}));
});