'use strict';

const KARMA = (config) => {
  config.set({
    basePath: __dirname + '/',
    files: [
      'https://code.jquery.com/jquery-3.1.1.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular-mocks.js',
      'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js',
      'client/**/*.js',
      'client/**/**/*.js',
      'test/*.test.js',
      'test/**/*.test.js'
    ],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    reporters: ['junit', 'coverage-istanbul', 'progress', 'html'],
    coverageIstanbulReporter: {
      dir: 'reports/istanbul/',
      reports: ['lcovonly', 'text-summary', 'html'],
      'report-config': {
        lcovonly: {
          subdir: 'lcov',
          root: 'client/'
        }
      }
    },
    junitReporter: {
      useBrowserName: false,
      outputDir: 'reports/junit',
      outputFile: 'tests.xml'
    },
    htmlReporter: {
      outputDir: 'reports/html/',
      templatePath: null,
      focusOnFailures: true,
      namedFiles: false,
      pageTitle: 'Karma Tests',
      urlFriendlyName: false,
      reportName: 'karma.test.results',
      preserveDescribeNesting: false,
      foldAll: true
    },
    exclude: [
      'node_modules/',
      'assets/',
      'server/'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  });
};

module.exports = KARMA;
