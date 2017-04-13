(() => {
  'use strict';

  angular.module('customerListController', ['dbService'])
  .controller('customerListController', function(dbService) {

    dbService.getAllCustomers().then((response) => {
      if(response.status !== 200) {
        console.log(response.data);
        return;
      }
      this.customerList = response.data;
    });

    this.ascending = true;

    this.sortList = () => {
      this.ascending = !this.ascending;
    };

  });
})();
