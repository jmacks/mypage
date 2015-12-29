'use strict';
//using the express module for the routing
let express = require('express');
let router = express.Router();


//the following defines the routes and which functions correspond

router.get('/', function(req, res){
  res.render('index');
});




module.exports = router;
