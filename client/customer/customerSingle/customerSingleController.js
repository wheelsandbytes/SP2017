(() => {
  'use strict';

  angular.module('customerSingleController', ['dbService'])
  .controller('customerSingleController', function(dbService) {
    this.customer = dbService.getCustomer();

  });
})();
