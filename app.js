var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var tweetBank = require('./tweetBank.js');
var routes = require('./routes/');

//INTEGRATION(start)
// when giving html files to res.render, tell it to use nunjucks
app.engine('html', nunjucks.render);

// have res.render work with html files
//the view engine IS our template engine
//A template engine enables you to use static template files in your application.
app.set('view engine', 'html');

//from the nunjucks docs: https://mozilla.github.io/nunjucks/getting-started.html
// point nunjucks to the proper directory for templates
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});
//INTEGRATION(end)

//you can use morgan as a logger as such:
// var morgan = require('morgan');
// app.use(morgan('combined'));

app.use('/', routes);

app.use(function(req,res,next){
  res.send("under construction");
});

app.use(function(req,res,next){
  console.log(req.method,req.url,res.statusCode);
  next();
});

// app.use('/special', function(req,res,next){
//   console.log("You reached the special area.");
//   next();
// });

// app.get("/tweets/", function(req,res,next){
//   res.send(tweetBank.list());
// });

// app.post("/tweets/", function(req,res,next){
//   tweetBank.add("New User", "New Tweet");
//   res.send(res.statusCode);
// });

// app.get('/', function(req,res,next){
//   // res.send("Welcome!");
//   res.render('index.html', {title: "An Example", people: [{name: "Gandalf"}, {name: "Frodo"}, 
//   {name: "Hermione"}]});
// });

// app.get("/news", function(req,res,next){
//   res.send("We don't have any news right now.");
// });

// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// app.use(function(req, res){
//  var echoObj = {
//       headers: req.headers,
//       method: req.method,
//       url: req.url,
//       body: req.body
//     };

//  res.json(echoObj);
// });

// app.get('/example', function (request, response) {
//  response.send('this is a response to GET\n')
// });

// app.post('/example', function (request, response) {
//  response.send('this is a response to POST\n')
// });

var server = app.listen(3000, function(){
  console.log("...server is listening on 3000...");
});
