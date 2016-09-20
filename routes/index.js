var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get('/stylesheets/style.css', function(req,res,next){
//   //res.sendFile("/Users/deborahkwon/twitter-js/public/stylesheets/style.css");
// });

module.exports = router;