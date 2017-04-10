'use strict';

// @ngAnnotate
class Routes {
  constructor() {
    this.$stateProvider = $stateProvider;
    this.$urlRouterProvider = $urlRouterProvider;

    this.$urlRouterProvider.otherwise('/');
    this.$stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>'
      })
  }
}

module.exports = Routes;
