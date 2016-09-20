var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json());

router.use(express.static('public'));

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
  // console.log(tweetBank.list());
});

//'/tweets' is the name of the form action
router.post('/tweets', function (req, res, next) {
 
  var name = req.body.name;
  var text = req.body.text;
   console.log(name,text);
  tweetBank.add(name, text);
  res.redirect('/');
});


router.get('/users/:name', function(req,res,next){
  var name = req.params.name;
  console.log(name);
  //tweetBank.find will return an array of object(s) that match the property(ies) passed to it
  var list = tweetBank.find({name: name});
  //tweets var is the var in index.html to be replaced
  res.render('index', {tweets: list, showForm: true, value: name });
});

router.get('/tweets/:id', function(req,res,next){
  var id = req.params.id;
  //tweetBank.find will return an array of object(s) that match the property(ies) passed to it
  var list = tweetBank.find({id: parseInt(id)});
  //tweets var is the var in index.html to be replaced
  res.render('index', {tweets: list});
});


// router.get('/stylesheets/style.css', function(req,res,next){
//   //res.sendFile("/Users/deborahkwon/twitter-js/public/stylesheets/style.css");
// });

module.exports = router;