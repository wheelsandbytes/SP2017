(() => {
  'use strict';

  angular.module('headerController', ['dbService', 'loginService'])
  .controller('headerController', function(dbService, loginService, $state) {

    this.brand = "EZ-CRM";

    this.isLoggedIn = () => {
      return loginService.isLoggedIn();
    };

    this.logout = () => {

      dbService.logout().then(function(response) {
        $state.go('app.login');
      });

    };

  });
})();
