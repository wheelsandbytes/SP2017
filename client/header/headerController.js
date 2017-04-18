(() => {
  'use strict';

  angular.module('headerController', ['dbService', 'loginService'])
  .controller('headerController', function(dbService, loginService, $state, $stateParams) {

    this.brand = "EZ-CRM";

    this.isLoggedIn = () => {
      this.isAdmin = loginService.getIsAdmin();
      return loginService.isLoggedIn();
    };

    this.logout = () => {

      dbService.logout().then(function(response) {
        $state.go('app.login');
      });

    };

  });
})();
