(() => {
  'use strict';

  angular.module('loginService', [])
  .service('loginService', function() {

    this.isLoggedInVar = false;
    this.userID = '';

    this.isLoggedIn = () => {
      return this.isLoggedInVar;
    };

    this.setLoginTrue = () => {
      this.isLoggedInVar = true;
    };

    this.setLoginFalse = () => {
      this.userID = '';
      this.isLoggedInVar = false;
    };

    this.setUserID = (id) => {
      this.userID = id;
    };

    this.getUserID = () => {
      return this.userID;
    };

  });
})();
