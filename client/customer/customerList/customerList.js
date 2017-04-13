(() => {
  'use strict';

  angular.module('allCustomers', ['customerListController'])
  .component('allCustomers', {
    templateUrl: './client/customer/customerList/customerList.html',
    controller: 'customerListController'
  });
})();
