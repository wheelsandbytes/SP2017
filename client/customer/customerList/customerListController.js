(() => {
  'use strict';

  angular.module('customerListController', ['dbService'])
  .controller('customerListController', function(dbService) {

    this.ascending = true;

    this.customerList = [
      {
        last: "Jenkins",
        first: "Willie",
        phone: "555-555-5555"
      },
      {
        last: "Jenkins",
        first: "Leeroy",
        phone: "555-555-5555"
      },
      {
        last: "Carter",
        first: "Lulu-Mae",
        phone: "555-555-5555"
      }
    ]

    this.sortList = () => {
      this.ascending = !this.ascending;
    }

  });
})();
