(() => {
  'use strict';

  angular.module('loginService', [])
  .service('loginService', function() {

    this.isLoggedInVar = false;

    this.isLoggedIn = () => {
      return this.isLoggedInVar;
    };

    this.setLoginTrue = () => {
      this.isLoggedInVar = true;
    };

    this.setLoginFalse = () => {
      this.isLoggedInVar = false;
    };

  });
})();
