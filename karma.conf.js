module.exports = function(config){
  config.set({

    basePath : './',

    frameworks: ['jasmine', 'mocha'],

    preprocessors: {
      'src/templates/*.html' : ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'PreprocessedTemplates'
    },

    files : [
      'src/bower_components/jquery/dist/jquery.js',
      'src/bower_components/angular/angular.js',
      'src/bower_components/angular-mocks/angular-mocks.js',
      'src/js/*.js',
      'src/js/**/*.js',
      'src/templates/*.html',
      'unit-tests/*.mocha.js',
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
            'karma-ng-html2js-preprocessor',
            'karma-htmlfile-reporter',//,
            //'karma-junit-reporter'
            ],

    reporters: ['progress', 'html'],

    htmlReporter: {
      outputFile: 'src/units.html',
      pageTitle: 'Unit Tests'
    }
    /*
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
    */
  });
};
