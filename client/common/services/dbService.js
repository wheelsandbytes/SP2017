(() => {
  'use strict';

  angular.module('dbService', [])
  .service('dbService', function($http) {
    const url = 'http://localhost:8080';

    let customer = null;

    this.getCustomer = () => {
      return customer;
    }

    this.login = (email, password, cb) => {
      return $http({
        method: 'POST',
        url: url + '/login',
        data: {
          username: email,
          password: password
        }
    })
      .then((response) => {
        console.log("login success");
        return response;
      }, (response) => {
        console.log("login failure");
        return response;
      });
    };

    this.getAllCustomers = () => {
      return $http({
        method: 'GET',
        url: url + '/customers/',
      })
      .then((response) => {
        console.log("grab customers success");
        return response;
      }, (response) => {
        console.log("grab customers failure");
        return response;
      });
    };

    this.getOneCustomer = (id) => {
      return $http({
        method: 'GET',
        url: url + '/customers/' + id,
      })
      .then((response) => {
        console.log("SUCCESS: grab single customer");
        customer = response.data;
        return response;
      }, (response) => {
        console.log("FAILURE: grab single customer");
        return repsonse;
      });
    };

    // for demo purposes
    this.createUserAccount = (first, last, password, email, admin) => {
      return $http({
        method: 'POST',
        url: url + '/users/',
        data: {
      			firstname : first,
      			lastname : last,
      			password : password,
      			email : email,
      			isAdmin : admin
        }
      })
      .then((response) => {
        console.log("create Account success");
        return response;
      }, (response) => {
        console.log("create Account failure");
        return response;
      });
    };

    this.getThisThing = () => {
      return $http({
        method: 'METHOD',
        url: 'localhost',
        data: {},
        headers: {}
      })
      .then((response) => {
        console.log("SUCCESS");
        return response;
      }, (response) => {
        console.log("FAILURE");
        return response;
      });
    };

    this.getAllEmployees = () => {
      return $http({
        method: 'GET',
        url: url + '/users/',
      })
      .then((response) => {
        console.log("grab users success");
        return response;
      }, (response) => {
        console.log("grab users failure");
        return response;
      });
    };

    this.createCustomer = (customerJSON) => {
      return $http({
        method: 'POST',
        url: url + '/customers/',
        data: customerJSON
      })
      .then((response) => {
        console.log("create customer success");
        return response;
      }, (response) => {
        console.log("create customer fail");
        return response;
      });
    };
  });
})();
