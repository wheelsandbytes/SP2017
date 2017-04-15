(() => {
  'use strict';

  angular.module('editCustomerController', ['dbService'])
  .controller('editCustomerController', function(dbService, $state) {

    this.customer = dbService.getCustomer();

    this.emails = [];
    this.phones = [];

    let addPhone = () => {
      let phone = this.phoneLine;
      if(phone === '' || typeof phone === undefined || typeof phone == 'undefined')
        return;
      this.phoneLine = '';
      this.phones.push(phone);
    };

    let addEmail = () => {
      let email = this.emailLine;
      if(email === '' || typeof email === undefined || typeof email == 'undefined')
        return;
      this.emailLine = '';
      this.emails.push(email);
    };

    let removePhone = (index) => {
      this.phones.splice(index, 1);
    }

    let removeEmail = (index) => {
      this.emails.splice(index, 1);
    }

    this.update = (arrayToUpdate, action, index) => {
      switch(action) {
        case 'add':
            if(arrayToUpdate === 'phone')
              addPhone();
            else if(arrayToUpdate === 'email')
              addEmail();
            break;
        case 'remove':
            if(arrayToUpdate === 'phone')
              removePhone(index);
            else if(arrayToUpdate === 'email')
              removeEmail(index);
            break;
        default:
            console.log("ERROR: Update failed!");
      }
    };

    // this.submit = () => {
    //
    //     let addresses = [];
    //     addresses.push({
    //       streetone: this.street1,
    //       streettwo: this.street2,
    //       city: this.city,
    //       state: this.state,
    //       zip: this.zip,
    //     });
    //
    //     let customerjson = {
    //       firstname: this.firstName,
    //       lastname: this.lastName,
    //       addresses: addresses,
    //       emails: this.emails,
    //       phonenumbers: this.phones
    //     };
    //
    //     console.log(customerjson);
    //
    //     dbService.createCustomer(customerjson).then((response) => {
    //       if(response.status !== 201) {
    //         console.log(response.data);
    //         return;
    //       }
    //       console.log(response.data);
    //       $state.go('app.customerList');
    //     });
    // };

  });
})();
