(() => {
  'use strict';

  angular.module('settingsController', ['dbService','loginService'])
  .controller('settingsController', function(dbService,loginService) {

console.log(loginService);
    this.first = loginService.getFirstName();
    this.last = loginService.getLastName();

    console.log(loginService.getUserID());

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

      console.log(loginService.getUserID());

      if ( this.passwordOne == this.passwordTwo ) {
        dbService.changePassword(loginService.getUserID(),this.passwordTwo).then((response) => {
          this.errorMessage = '';

        });
      }
      else {
        this.errorMessage = 'Passwords do not match';
        console.log('passwords need to match');
      }
    }

  });
})();
