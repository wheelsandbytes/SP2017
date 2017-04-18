(() => {
  'use strict';

  angular.module('customerSingleController', ['dbService'])
  .controller('customerSingleController', function(dbService) {
    this.customer = dbService.getCustomer();

    console.log(this.customer);

    this.productList = this.customer.products;
    this.noteTypes = dbService.getAvailableNoteTypes();

    // for notes
    this.noteType = null;
    this.comment = null;

    // for products
    this.productName = null;
    this.productPrice = null;
    this.productFreq = null;

    this.frequencyTypes = [
      { name:'Bi-Weekly'},
      { name:'Bi-Monthly'},
      { name:'Monthly'},
      { name:'One-Time'}
    ];

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

      if ( this.noteType.name != null && this.comment != null ) {
        this.customer.notes.push(
          {
            'noteType': this.noteType.name,
            'comment': this.comment,
            'Date': Date.now().toString(),
            'User': 'Ed'
          }
        );

        let jsonObject = {
          id: this.customer._id,
          notes: this.customer.notes
        };

        // console.log(jsonObject);
        dbService.addNote(jsonObject);
        // console.log(this.customer);
      }
    };

    this.addProduct = () => {

      let newProduct = {
        'start': null,
        'end': null,
        'isActive': true,
        'name': this.productName,
        'number':  1,
        'price': this.productPrice,
        'frequency': this.productFreq.name,
        'total': null,
        'dateCreated': Date.now()
      };

      console.log(newProduct);

      this.customer.products.push(newProduct);

      let jsonObject = {
        id: this.customer._id,
        products: this.customer.products
      };

      if ( this.productName != null && this.productPrice != null && this.productFreq != null ) {
        dbService.addProduct(jsonObject);
      }
    };

    this.removeProduct = (index) => {

      this.customer.products.splice(index,1);

      console.log(this.customer.products);

      let jsonObject = {
        id: this.customer._id,
        products: this.customer.products
      };

      dbService.addProduct(jsonObject);
    };

    this.editCustomer = () => {
      // to do lol
    };

  });
})();
