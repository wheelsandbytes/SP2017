var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var customerSchema = new Schema({	'firstname' : String,	'lastname' : String,	'emails': Array,	'addresses' : Array,	'phonenumbers' : Array,	'products' : [{		'start': String,		'end': String,		'isActive': Boolean,		'name': String,		'number': String,		'price': Number,		'frequency': Number,		'total': Number,		'dateCreated': String	}],	'notes' : [{		'type': String,		'comment': String,		'Date': String,		'User': String	}],	'dateCreated' : String});

module.exports = mongoose.model('customer', customerSchema);

// policies
// startdate
// enddate
