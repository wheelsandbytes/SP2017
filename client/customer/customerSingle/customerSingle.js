(() => {
  'use strict';

  angular.module('customerSingle', ['customerSingleController'])
  .component('customerSingle', {
    templateUrl: './client/customer/customerSingle/customerSingle.html',
    controller: 'customerSingleController'
  });
})();
