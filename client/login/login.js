(() => {
  'use strict';

  angular.module('appLogin', ['loginController'])
  .component('appLogin', {
    templateUrl: './client/login/login.html',
    controller: 'loginController'
  });
})();
