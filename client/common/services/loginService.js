(() => {
  'use strict';

  angular.module('loginService', [])
  .service('loginService', function() {

    this.isLoggedInVar = false;
    this.userID = '';
    this.firstName = '';
    this.lastname = '';

    this.isLoggedIn = () => {
      return this.isLoggedInVar;
    };

    this.setLoginTrue = () => {
      this.isLoggedInVar = true;
    };

    this.setLoginFalse = () => {
      this.userID = '';
      this.firstName = '';
      this.lastName = '';
      this.isLoggedInVar = false;
    };

    this.setUserID = (id) => {
      this.userID = id;
    };

    this.getUserID = () => {
      return this.userID;
    };

    this.setFirstName = (first) => {
      this.firstName = first;
    };

    this.getFirstName = (first) => {
      return this.firstName;
    };

    this.setLastName = (first) => {
      this.lastName = first;
    };

    this.getLastName = (first) => {
      return this.lastName;
    };
  });
})();
