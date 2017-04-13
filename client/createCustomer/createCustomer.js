(() => {
  'use strict';

  angular.module('createCustomer', ['createCustomerController'])
  .component('createCustomer', {
    templateUrl: './client/createCustomer/createCustomer.html',
    controller: 'createCustomerController'
  });
})();
