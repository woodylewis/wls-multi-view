module.exports = function(config){
  config.set({

    basePath : './',

    frameworks: ['jasmine', 'mocha'],

    files : [
      'src/bower_components/angular/angular.js',
      'src/bower_components/angular-mocks/angular-mocks.js',
      'src/js/*.js',
      'src/js/**/*.js',
      'unit-tests/*.mocha.js',
      'src/bower_components/angular-route/angular-route.js',
      'src/bower_components/angular-mocks/angular-mocks.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch : true,

    browsers : ['Chrome'],

    plugins : [
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
