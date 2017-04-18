(() => {
  'use strict';

  angular.module('dbService', ['loginService'])
  .service('dbService', function(loginService, $http) {
    const url = 'http://localhost:8080';

    let customer = null;

    this.getCustomer = () => {
      return customer;
    };

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
        loginService.setLoginTrue();
        loginService.setUserID(response.data.userID);
        loginService.setFirstName(response.data.firstName);
        loginService.setLastName(response.data.lastName);

        return response;
      }, (response) => {
        console.log("login failure");
        return response;
      });
    };

    this.logout = () => {
      return $http({
        method: 'POST',
        url: url + '/logout',
    })
      .then((response) => {
        loginService.setLoginFalse();
        console.log("logout success");
        return response;
      }, (response) => {
        console.log("logout failure");
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
        // console.log(response.data);
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

    this.getAvailableProducts = () => {
      return [
        {
      		'start': null,
      		'end': null,
      		'isActive': false,
      		'name': 'Widgets',
      		'number': 1,
      		'price': 126.34,
      		'frequency': 1,
      		'total': null,
      		'dateCreated': null
        },
        {
          'start': null,
      		'end': null,
      		'isActive': false,
      		'name': 'Shenanigans Magazine',
      		'number': 1,
      		'price': 9.99,
      		'frequency': 12,
      		'total': null,
      		'dateCreated': null
        },
        {
          'start': null,
      		'end': null,
      		'isActive': false,
      		'name': 'Hijinks Weekly',
      		'number': 1,
      		'price': 3.99,
      		'frequency': 52,
      		'total': null,
      		'dateCreated': null
        },
        {
          'start': null,
      		'end': null,
      		'isActive': false,
      		'name': "Thing'em-bob",
      		'number': 1,
      		'price': 415.96,
      		'frequency': 1,
      		'total': null,
      		'dateCreated': null
        },
        {
          'start': null,
      		'end': null,
      		'isActive': false,
      		'name': 'Frob',
      		'number': 1,
      		'price': 84.30,
      		'frequency': 1,
      		'total': null,
      		'dateCreated': null
        }
      ];
    };

    this.getAvailableNoteTypes = () => {
      return [
        { name: 'Payment' },
        { name: 'Callback' },
        { name: 'Refund' },
        { name: 'Complaint' },
        { name: 'General' }
      ];
    };

    this.addNote = (jsonObject) => {
      return $http({
        method: 'PUT',
        url: url + '/customers/' + jsonObject.id,
        data: { 'notes': jsonObject.notes }
      })
      .then((response) => {
        console.log("SUCCESS: add note");
        return response;
      }, (response) => {
        console.log("ERROR: add note");
        console.log(response);
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

    this.addProduct = (jsonObject) => {
      return $http({
        method: 'PUT',
        url: url + '/customers/' + jsonObject.id,
        data: { 'products': jsonObject.products }
      })
      .then((response) => {
        console.log("SUCCESS: add products");
        return response;
      }, (response) => {
        console.log("ERROR: add products");
        console.log(response);
        return response;
      });
    };

    this.editCustomer = (jsonObject) => {

      return $http({
        method: 'PUT',
        url: url + '/customers/' + jsonObject.id,
        data: {
          'firstname': jsonObject.customerData.firstname,
          'lastname': jsonObject.customerData.lastname,
          'addresses': jsonObject.customerData.addresses,
          'phonenumbers': jsonObject.customerData.phonenumbers,
          'emails': jsonObject.customerData.emails
        }
      })
      .then((response) => {
        console.log("SUCCESS: editCustomer");
        return response;
      }, (response) => {
        console.log("ERROR: editCustomer");
        console.log(response);
        return response;
      });
    };

  });
})();
