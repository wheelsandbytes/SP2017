'use strict';

const session = require('express-session');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);
const morgan = require('morgan');

// persistent sessions
const seshstore = new MongoDBStore({
  uri: 'mongodb://admin:password@ds021994.mlab.com:21994/senior',
  collection: 'userSessions'
});

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: "SECRETKEYLOOKATMEIMASECRETKEY",
  saveUninitialized: true,
  resave: false,
  cookie: {},
  store: seshstore
}));
app.use(morgan('dev'));

// requirements for backend routing
const users = require('./server/user/userRoutes');
const customers = require('./server/customer/customerRoutes');
const routes = require('./server/routes');

// backend routing
app.use('/users', users);
app.use('/customers', customers);
app.use('/', routes);

// Front End
app.use("/js", express.static(__dirname + "/client/js"));
app.use("/img", express.static(__dirname + "/client/img"));
app.use("/css", express.static(__dirname + "/client/css"));
app.use("/partials", express.static(__dirname + "/client/partials"));
app.use("/templates", express.static(__dirname + "/client/templates"));
app.all("/*", function(req, res, next) {
    res.sendFile("index.html", { root: __dirname + "/client" });
});

// Back end
mongoose.connect('mongodb://admin:password@ds021994.mlab.com:21994/senior', (err) => {

  if (err) {
    throw err;
  }

  app.listen(8000, () => {
    console.log('EZ Customer Service Software is listening on Port: ' + 8000);
  });

});
