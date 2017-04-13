(() => {
  'use strict';

  angular.module('dbService', [])
  .service('dbService', function($http) {

    const url = 'http://localhost:8080';

    this.getHelloWorld = () => {
      return 'Hello World';
    };

    this.login = (email, password, cb) => {
      return $http({
        method: 'POST',
        url: url + '/login',
        data: {
          username: email,
          password: password
        }
    })
      .then((response) => {
        console.log("login success");
        return cb(null, response);
      }, (response) => {
        console.log("login failure");
        return cb(response);
      });
    };

    this.getThisThing = () => {
      return $http({
        method: 'METHOD',
        url: 'localhost',
        data: {},
        headers: {}
      })
      .then((response) => {
        console.log("SUCCESS");
        return response;
      }, (response) => {
        console.log("FAILURE");
        return response;
      });
    };

  });
})();
