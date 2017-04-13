(() => {
  'use strict';

  angular.module('dbService', [])
  .service('dbService', function($http) {

    this.getHelloWorld = () => {
      return 'Hello World'
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
