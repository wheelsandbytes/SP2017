(() => {
  'use strict';

  angular.module('createCustomer', ['createCustomerController'])
  .component('createCustomer', {
    templateUrl: './client/customer/createCustomer/createCustomer.html',
    controller: 'createCustomerController'
  });
})();
