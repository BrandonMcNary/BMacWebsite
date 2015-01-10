'use strict';

var express = require('express');
var app     = express();

require(__dirname+'/config')(app);
require(__dirname+'/routes')(app);
app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), function(){
  console.log('running on port ' + app.get('port'));
});