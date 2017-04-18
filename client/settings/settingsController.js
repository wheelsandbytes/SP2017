(() => {
  'use strict';

  angular.module('settingsController', ['dbService'])
  .controller('settingsController', function(dbService) {

    this.first = 'Willie';
    this.last = 'Jenkins';

    this.editFirst = false;
    this.editLast = false;
    this.editPassword = false;

    this.editFirst = () => {
      console.log("EDIT FIRST");
    };

    this.editLast = () => {
      console.log("EDIT LAST");
    }

    this.editPassword = () => {
      console.log("EDIT Password");
    }

  });
})();
