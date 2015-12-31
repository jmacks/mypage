'use strict';

let express = require('express');
let app = express();
let routes = require('./config/routes');

//use this middleware
app.use('/', express.static(__dirname + '/public'));

app.use('/scripts', express.static(__dirname + '/node_modules'));

app.use(routes);


//the server connection
const server = app.listen(process.env.PORT || 3000, function(){
  console.log('JEFF MACKS HOMEPAGE RUNNING ON PORT 3000')
});
