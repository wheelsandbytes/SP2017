(() => {
  'use strict';

  angular.module('loginController', ['dbService'])
  .controller('loginController', function(dbService, $state) {

    let scope = this;

    scope.x = dbService.getHelloWorld();

    scope.login = function() {
      let email = scope.email;
      let password = scope.password;

      scope.email = '';
      scope.password = '';

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
