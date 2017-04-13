(() => {
  'use strict';

  angular.module('createEmployee', ['createEmployeeController'])
  .component('createEmployee', {
    templateUrl: './client/adminPanel/createEmployee/createEmployee.html',
    controller: 'createEmployeeController'
  });
})();
