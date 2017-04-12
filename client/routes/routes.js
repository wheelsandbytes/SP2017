(() => {
  'use strict';

  angular.module('routes', [
    'ui.router'
  ])
  .config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('');
    $urlRouterProvider.when('', '/login')

    $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        views: {
          'header': { template: 'header' },
          'main': { template: 'main' },
          'footer': { template: 'footer' }
        },
        params: {},
      })
      .state('app.login', {
        url: '/login',
        views: {
          'main': { template: 'login' }
        },
        params: {},
      });



    });
})();
