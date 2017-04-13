(() => {
  'use strict';

  angular.module('allCustomers', ['customerListController'])
  .component('allCustomers', {
    templateUrl: './client/customerList/customerList.html',
    controller: 'customerListController'
  });
})();
