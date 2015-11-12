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
    console.log('3 BUTTONS');
  });

  it('Click the third send button', function() {
    var gamma = sendButtons.get(2)
    gamma.click()
    .then(function() {
      var b1 = element.all(by.css('#b_one'));
      //var b1 = element.all(by.binding('us.bundle.one')).get(0);
      //expect(b1.getId()).toEqual('b_one');
      expect(b1.count()).toEqual(3);
      /*
      var first = b1.get(0);
      var theVal = first.getText();
      console.log('VALUE ', theVal);
      */
      element
      .all(by.id('alphaDiv'))
      .getAttribute('bundle')
      .then( function(data) {
        console.log('BUNDLE ', data);
      });
    });

  });
});
