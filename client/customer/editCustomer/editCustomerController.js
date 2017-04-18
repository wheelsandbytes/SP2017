(() => {
  'use strict';

  angular.module('editCustomerController', ['dbService'])
  .controller('editCustomerController', function(dbService, $state) {

    this.customer = dbService.getCustomer();

    this.firstName = this.customer.firstname;
    this.lastName = this.customer.lastname;

    this.street1 = this.customer.addresses[this.customer.addresses.length - 1].streetone;
    this.street2 = this.customer.addresses[this.customer.addresses.length - 1].streettwo;
    this.city = this.customer.addresses[this.customer.addresses.length - 1].city;
    this.state = this.customer.addresses[this.customer.addresses.length - 1].state;
    this.zip = this.customer.addresses[this.customer.addresses.length - 1].zip;

    this.emailLine = this.customer.emails[this.customer.emails.length - 1];
    this.phoneLine = this.customer.phonenumbers[this.customer.phonenumbers.length - 1]

    this.emails = this.customer.emails;
    this.phones = this.customer.phonenumbers;

    this.submit = () => {
        let addresses = [];
        addresses.push({
          streetone: this.street1,
          streettwo: this.street2,
          city: this.city,
          state: this.state,
          zip: this.zip,
        });

        let customerjson = {
          firstname: this.firstName,
          lastname: this.lastName,
          addresses: addresses,
          emails: this.emails,
          phonenumbers: this.phones
        };

        let jsonObject = {
          id: this.customer._id,
          customerData: customerjson
        };

        dbService.editCustomer(jsonObject).then((response) => {
          console.log("editcustomer:", response);
          dbService.getOneCustomer(this.customer._id).then((response) => {
            console.log("getone: ", response);
            $state.go('app.customerSingle');
          }, (response) => {
            this.errorMessage = "Edit Customer Failed";
          });
        }, (response) => {
          console.log("ERROR: CONTROLLER: ", response);
        });
    };

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

  });
})();
