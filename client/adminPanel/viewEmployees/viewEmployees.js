(() => {
  'use strict';

  angular.module('viewEmployees', ['viewEmployeesController'])
  .component('viewEmployees', {
    templateUrl: './client/adminPanel/viewEmployees/viewEmployees.html',
    controller: 'viewEmployeesController'
  });
})();
