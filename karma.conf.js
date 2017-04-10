'use strict';

const WPTC = require('./webpack.test.config');

let karmaConfig = (config) => {
  config.set({
    files: [
      'client/test-setup.webpack.js'
    ],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    preprocessors: {
      'client/test-setup.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: config.reporters.concat(['junit', 'coverage-istanbul']),
    webpack: WPTC,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    coverageIstanbulReporter: {
      dir: 'reports/coverage',
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
      outputDir: 'reports/tests',
      outputFile: 'tests.xml'
    }
  });
};

module.exports = karmaConfig;
