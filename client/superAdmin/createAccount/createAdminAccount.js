(() => {
  'use strict';

  angular.module('createAdminAccount', ['createAdminAccountController'])
  .component('createAdminAccount', {
    templateUrl: './client/superAdmin/createAccount/createAdminAccount.html',
    controller: 'createAdminAccountController'
  });
})();
