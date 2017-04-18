(() => {
  'use strict';

  angular.module('viewEmployeesController', ['dbService'])
  .controller('viewEmployeesController', function(dbService) {

    dbService.getAllEmployees().then((response) => {
      if(response.status !== 200) {
        console.log(response.data);
        return;
      }

      console.log(response.data);

      this.employeeList = response.data;
    });

    this.ascending = true;

    this.sortList = () => {
      this.ascending = !this.ascending;
    };

    this.fireEmployee = () => {
      // dbService.deleteEmployee().then((response) => {
      //   if (response.status !== 200) {
      //     console.log(response.data);
      //     return;
      //   }
      //   console.log(response.data);
      // })
    };

  });
})();
