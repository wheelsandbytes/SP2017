'use strict';

//
module.exports = {
  register: (app, fileToSend) => {
    app.get('/', function(req, res) {
      res.sendFile(fileToSend);
    });
  }
};
