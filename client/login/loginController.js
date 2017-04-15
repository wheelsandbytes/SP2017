(() => {
  'use strict';

  angular.module('loginController', ['dbService'])
  .controller('loginController', function(dbService, $state) {

    this.login = function() {
      let email = this.email;
      let password = this.password;

      this.email = '';
      this.password = '';

      dbService.login(email, password).then((response) => {
        if(response.status !== 200) {
          this.errorMessage = response.data;
          return;
        }

        $state.go('app.customerList');
      });
    };

  });
})();
