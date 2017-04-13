(() => {
  'use strict';

  angular.module('loginController', ['dbService'])
  .controller('loginController', function(dbService) {

    this.x = dbService.getHelloWorld();

  });
})();
