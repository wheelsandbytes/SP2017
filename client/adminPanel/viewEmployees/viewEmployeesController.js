(() => {
  'use strict';

  angular.module('viewEmployeesController', ['dbService','loginService'])
  .controller('viewEmployeesController', function(dbService,loginService) {

    this.employeeList = [];
    
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

    this.fireEmployee = (email,index) => {

      console.log(index);

      dbService.deleteEmployee(email).then((response) => {
        if (response.status !== 204) {
          console.log(response.data);
          return;
        }

        this.employeeList.splice(index,1);

        console.log(this.employeeList);
      });
    };

  });
})();
