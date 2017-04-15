(() => {
  'use strict';

  angular.module('customerSingleController', ['dbService'])
  .controller('customerSingleController', function(dbService) {
    this.customer = dbService.getCustomer();

    this.productList = dbService.getAvailableProducts();
    this.noteTypes = dbService.getAvailableNoteTypes();

    this.noteType = null;
    this.comment = null;

    this.frequency = (number) => {
      let freq = null;

      if(number > 24) {
        freq = 'Bi-Weekly';
      }
      else if(number > 12) {
        freq = 'Bi-Monthly';
      }
      else if(number > 1) {
        freq = 'Monthly';
      }
      else {
        freq = 'One-Time';
      }

      return freq;
    }

    let baseRoute = "./client/customer/customerSingle/includes/";
    this.includePaths = [
      baseRoute + "customer.html",
      baseRoute + "products.html",
      baseRoute + "notes.html",
      baseRoute + "editCustomerModal.html"
    ];

    this.addNote = () => {
      let jsonObject = {
        id: this.customer._id,
        note: {
          'type': this.noteType.name,
          'comment': this.comment,
          'Date': Date.now(),
          'User': 'Ed'
        }
      };

      console.log(jsonObject);
      dbService.addNote(jsonObject);
      console.log(this.customer);
    };


    this.editCustomer = () => {
      // dbService.editCustomer(this.customer._id);
    }
  	// 'notes' : [{
  	// 	'type': String,
  	// 	'comment': String,
  	// 	'Date': String,
  	// 	'User': String
  	// }],

  });
})();
