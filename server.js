/* eslint no-console: 0 */
var express = require('express');
var path = require('path');
var config = require('./config');

var app = express();

app.use('/static', express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(config.port.client, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:' + config.port.client);
});
