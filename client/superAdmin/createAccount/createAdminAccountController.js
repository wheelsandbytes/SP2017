(() => {
  'use strict';

  angular.module('createAdminAccountController', ['dbService'])
  .controller('createAdminAccountController', function(dbService, $state) {

    this.submit = function() {
      let email = this.email;
      let firstName = this.firstName;
      let lastName = this.lastName;
      let password = this.password;

      this.email = '';
      this.firstName = '';
      this.lastName = '';
      this.password = '';

      dbService.createUserAccount(firstName, lastName, password, email, true).then((response) => {
        if(response.status !== 201) {

          if(response.data.error.code === 11000) {
            console.log('This email is already in use!');
            this.errorMessage = 'This email address is already in use.';
          }

          console.log(response);
          return;
        }

        $state.go('app.login');
      });
    };

  });
})();
