var express = require('express');
var app = express();

//you can use morgan as a logger as such:
// var morgan = require('morgan');
// app.use(morgan('combined'));

app.use(function(req,res,next){
  console.log(req.method,req.url,res.statusCode);
  next();
})

// app.use('/special', function(req,res,next){
//   console.log("You reached the special area.");
//   next();
// });

app.get('/', function(req,res,next){
  res.send("Welcome!");
});

app.get("/news", function(req,res,next){
  res.send("We don't have any news right now.");
});

// app.get('/special/42', function(req,res,next){
//   res.send("You got to 42")
// })
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
