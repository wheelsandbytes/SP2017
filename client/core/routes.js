'use strict';

// @ngAnnotate
let routes = ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('');
  $urlRouterProvider.when('', '/login');

  $stateProvider
    .state('index', {
      //abstract: true,
      url: '',
      template: '<h1>index</h1>'
    })
    .state('index.login', {
      url: '/login',
      template: '<h1>login</h1>'
    })
}

module.exports = routes;
