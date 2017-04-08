'use strict';
const serveIndex = require('serve-index');
const express = require('express');
let app = express();

// requirements
const users = require('./server/user/userRoutes');
const customers = require('./server/customer/customerRoutes');

// backend routing
app.use('/users', users);
app.use('/customers', customers);

// use this for anything angular facing
app.use("/js", express.static(__dirname + "/client/js"));
app.use("/img", express.static(__dirname + "/client/img"));
app.use("/css", express.static(__dirname + "/client/css"));
app.use("/partials", express.static(__dirname + "/client/partials"));
app.use("/templates", express.static(__dirname + "/client/templates"));
app.all("/*", function(req, res, next) {
    res.sendFile("index.html", { root: __dirname + "/client" });
});


app.listen(8000, () => {
  console.log('EZ Customer Service Software is listening on Port: ' + 8000);
});
