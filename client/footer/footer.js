(() => {
  'use strict';

  angular.module('appFooter', ['footerController'])
  .component('appFooter', {
    templateUrl: './client/footer/footer.html',
    controller: 'footerController'
  });
})();
