(() => {
  'use strict';

  angular.module('routes', [
    'ui.router',
    'appHeader',
    'appMain',
    'appFooter',
    'appLogin',
    'createAdminAccount',
    'createCustomer',
    'viewEmployees',
    'createEmployee',
    'allCustomers',
    'customerSingle',
    'editCustomer',
    'settings'
  ])
  .config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/login');
    // $urlRouterProvider.when('/', '');


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
      })
      .state('app.createAdminAccount', {
        url: '/super-admin/create-admin-account',
        template: '<create-admin-account></create-admin-account>',
        params: {},
      })
      .state('app.viewEmployees', {
        url: '/admin-panel/view-employees',
        template: '<view-employees></view-employees>',
        params: {},
      })
      .state('app.createEmployee', {
        url: '/admin-panel/create-employee',
        template: '<create-employee></create-employee>',
        params: {},
      })
      .state('app.createCustomer', {
        url: '/customer/create-customer',
        template: '<create-customer></create-customer>',
        params: {},
      })
      .state('app.customerList', {
        url: '/customer/all-customers',
        template: '<all-customers></all-customers>',
        params: {},
      })
      .state('app.customerSingle', {
        url: '/customer/single-customer',
        template: '<customer-single></customer-single>',
        params: {},
      })
      .state('app.settings', {
        url: '/settings',
        template: '<settings></settings>',
        params: {},
      })
      .state('app.editCustomer', {
        url: '/customer/edit-customer',
        template: '<edit-customer></edit-customer>',
        params: {},
      })
      ;

    });
})();
