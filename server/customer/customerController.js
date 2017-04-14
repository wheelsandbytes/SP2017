var customerModel = require('./customerModel.js');

/**
 * customerController.js
 *
 * @description :: Server-side logic for managing customers.
 */
module.exports = {

    /**
     * customerController.list()
     */
    list: function (req, res) {
        customerModel.find(function (err, customers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customer.',
                    error: err
                });
            }
            return res.json(customers);
        });
    },

    /**
     * customerController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        customerModel.findOne({_id: id}, function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customer.',
                    error: err
                });
            }
            if (!customer) {
                return res.status(404).json({
                    message: 'No such customer'
                });
            }
            return res.json(customer);
        });
    },

    /**
     * customerController.create()
     */
    create: function (req, res) {
        var customer = new customerModel({			firstname : req.body.firstname,			lastname : req.body.lastname,			notes : req.body.notes,			addresses : req.body.addresses,			phonenumbers : req.body.phonenumbers,      emails: req.body.emails,			dateCreated : req.body.dateCreated
        });

        customer.save(function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating customer',
                    error: err
                });
            }
            return res.status(201).json(customer);
        });
    },

    /**
     * customerController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        customerModel.findOne({_id: id}, function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customer',
                    error: err
                });
            }
            if (!customer) {
                return res.status(404).json({
                    message: 'No such customer'
                });
            }

            customer.firstname = req.body.firstname ? req.body.firstname : customer.firstname;			customer.lastname = req.body.lastname ? req.body.lastname : customer.lastname;			customer.notes = req.body.notes ? req.body.notes : customer.notes;			customer.addresses = req.body.addresses ? req.body.addresses : customer.addresses;			customer.phonenumbers = req.body.phonenumbers ? req.body.phonenumbers : customer.phonenumbers;      customer.products = req.body.products ? req.body.products : customer.products;

            customer.save(function (err, customer) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating customer.',
                        error: err
                    });
                }

                return res.json(customer);
            });
        });
    },

    /**
     * customerController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        customerModel.findByIdAndRemove(id, function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the customer.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
