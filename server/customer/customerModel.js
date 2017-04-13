var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var customerSchema = new Schema({	'firstname' : String,	'lastname' : String,	'emails': Array,	'addresses' : [{		'streetone': 'string',		'streettwo': 'string',		'city': 'string',		'state': 'string',		'zip': 'string',	}],	'phonenumbers' : Array,	'products' : [{		'start': String,		'end': String,		'isActive': Boolean,		'name': String,		'number': String,		'price': Number,		'frequency': Number,		'total': Number,		'dateCreated': String	}],	'notes' : [{		'type': String,		'comment': String,		'Date': String,		'User': String	}],	'dateCreated' : { type: Date, default: Date.now }});

module.exports = mongoose.model('customer', customerSchema);

// policies
// startdate
// enddate
