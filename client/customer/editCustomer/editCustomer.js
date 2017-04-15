(() => {
  'use strict';

  angular.module('editCustomer', ['editCustomerController'])
  .component('editCustomer', {
    templateUrl: './client/customer/editCustomer/editCustomer.html',
    controller: 'editCustomerController'
  });
})();
