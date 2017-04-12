'use strict';

import angularUiRouter from 'angular-ui-router';

const MODULE_NAME = 'routes';

angular
  .module(MODULE_NAME, [
    angularUiRouter
  ])
  .config('routes', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise(' ');
    $urlRouterProvider.when(' ', '/login');
    $stateProvider
      .state('login', {
        url: ' ',
        template: '<h1>hello world<h1>'
      })
  })

module.exports = MODULE_NAME;
