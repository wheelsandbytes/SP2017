(() => {
  'use strict';

  angular.module('routes', [
    'ui.router',
    'appHeader',
    'appMain',
    'appFooter',
    'appLogin'
  ])
  .config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/login')

    $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        views: {
          'header': { template: '<app-header></app-header>' },
          'main': { template: '<app-main></app-main>' },
          'footer': { template: '<app-footer></app-footer>' }
        },
        params: {},
      })
      .state('app.login', {
        url: '/login',
        template: '<app-login></app-login>',
        params: {},
      });

    });
})();
