const bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var userSchema = new Schema({
	'firstname' : String,
	'lastname' : String,
	'password' : String,
	'email' : {
		'type': String,
		'unique': true
	},
	'isAdmin' : Boolean,
});

userSchema.pre('save', function(next, done) {
		let user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, backendpassword, cb) {

    bcrypt.compare(candidatePassword, backendpassword, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('user', userSchema);
