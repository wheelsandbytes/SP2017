(() => {
  'use strict';

  angular.module('customerListController', ['dbService'])
  .controller('customerListController', function(dbService, $state) {

    dbService.getAllCustomers().then((response) => {
      this.customerList = response.data;
    }, (response) => {
      console.log("CONTROLLER: ERROR: ", response.data);
    });

    this.ascending = true;

    this.selectCustomer = (customerId) => {
      console.log(customerId);
      dbService.getOneCustomer(customerId).then((response) => {
        console.log("CONTROLLER: ", response);
        $state.go('app.customerSingle');
      }, (response) => {
        console.log("CONTROLLER: ERROR: ", response.data);
      });
    };

  });
})();
