'use strict';
const userModel = require('../user/userModel.js');
const _ = require('lodash');

module.exports = {
  login: (req, res) => {

    if(_.isEmpty(req.body.username) || _.isEmpty(req.body.password)) {
      return res.status(400).send('Username and or password is empty!');
    }

    userModel.findOne({ email: req.body.username }, function(err, user) {
      if (err) {
        res.send(500);
        throw err;
      }

      if(user === null) {
        return res.status(400).send('Username or password is incorrect!');
      }

      // test a matching password
      userModel.schema.methods.comparePassword(req.body.password, user.password, function(err, valid) {
          if (err) {
            res.send(500);
            throw err;
          }

          if(!valid) {
            return res.status(400).send('Username or password is incorrect!');
          }

          // create session
          let session = {
              email: user.email,
              firstname: user.firstname,
              lastname: user.lastname,
              admin: user.isAdmin
          };

          // store session
          user.save((err) => {

            if (err) {
              res.send(500);
              throw err;
            }

            req.session.user = session;
            res.send(200);
          });

      });

  });
},

logout: (req, res) => {
  req.session.destroy();
  res.send(200);
},

authme: (req, res, next) => {
    // if(!req.session.user) {
    //   return res.status(401).send("You need to log in!");
    // }
    //
    // console.log(req.session);

    next();
  }
};
