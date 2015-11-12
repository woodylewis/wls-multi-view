'use strict';

describe('wls-multi-views', function() {

  it('Should start on home page', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  var sendButtons;

  beforeEach(function() {
    sendButtons = element.all(by.css('.send'));
  });

  it('There should be three send buttons', function() {
    expect(sendButtons.count()).toEqual(3);
  });

  it('Click the third send button', function() {
    element
    .all(by.id('alphaDiv'))
    .getAttribute('bundle')
    .then( function(data) {
      console.log('BUNDLE ', data);
    });

    var gamma = sendButtons.get(2)
    gamma.click()
    .then(function() {
      var b1 = element.all(by.css('#b_one'));
      var first = b1.get(0);
      expect(first.getText()).toContain('gammaOne');
    });

  });
});
