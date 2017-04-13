(() => {
  'use strict';

  angular.module('loginController', ['dbService'])
  .controller('loginController', function(dbService, $state) {

    this.x = dbService.getHelloWorld();

    this.login = function() {
      let email = this.email;
      let password = this.password;

      this.email = '';
      this.password = '';

      dbService.login(email, password, function(err, res) {
        if(err) {
          return console.log(err);
        }

        $state.go('app.customerList');
      });
    };

  });
})();
