'use strict';

var path          = require('path');
var express       = require('express');
// var bodyParser    = require('body-parser');

module.exports = function(app){
  var fullpath = path.join(__dirname, '../public');
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded());
  app.use(express.logger('dev'));
  // limit set to 5mb for the purpose of upload CSV files
  app.use(express.urlencoded({limit: '50mb'}));
  app.use(express.json({limit: '50mb'}));
  app.use(express.methodOverride());
  app.use(express.static(fullpath));
  app.use(app.router);
};

// your typical server config file, nothing special here.