var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var customerSchema = new Schema({	'firstname' : String,	'lastname' : String,	'notes' : Array,	'callHistory' : Array,	'addresses' : Array,	'phonenumbers' : Array,	'dateCreated' : String});

module.exports = mongoose.model('customer', customerSchema);
