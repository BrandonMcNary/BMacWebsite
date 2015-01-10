'use strict';

module.exports = function(app){
  app.get('/', sendRoot);

};

var sendRoot = function(req, res) {
  res.sendfile('public/index.html');
};