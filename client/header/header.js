(() => {
  'use strict';

  angular.module('appHeader', ['headerController'])
  .component('appHeader', {
    templateUrl: './client/header/header.html',
    controller: 'headerController'
  });
})();
