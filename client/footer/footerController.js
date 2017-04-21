(() => {
  'use strict';

  angular.module('footerController', [])
  .controller('footerController', function($state) {

    this.brand = "EZ-CRM " + '\u00A9' + "2017";

    this.$doCheck = () => {
      this.loginState = $state.includes('app.login');
      console.log(this.loginState);
    };
  });
})();
