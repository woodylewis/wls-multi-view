describe('checking event bus', function() {

  var scope;
  var ctrl;

  beforeEach(module('multiview.eventBus'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('EventBus', {$scope: scope});
  }));

  it('should have a reset function', function(){
    expect(ctrl.reset).toBeTruthy();
  });
});
