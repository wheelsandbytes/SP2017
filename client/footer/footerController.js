(() => {
  'use strict';

  angular.module('footerController', [])
  .controller('footerController', function() {

    this.brand = "EZ-CRM " + '\u00A9' + "2017";

  });
})();
