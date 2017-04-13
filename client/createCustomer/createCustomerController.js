(() => {
  'use strict';

  angular.module('createCustomerController', [])
  .controller('createCustomerController', function() {

    this.emails = [];

    this.addEmail = function() {
      let email = this.emailLine;
      if(email === '' || typeof email === undefined || typeof email == 'undefined') return;
      this.emailLine = '';
      this.emails.push(email);
    };

  });
})();
