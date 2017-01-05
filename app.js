// require express module and create instance of app
var express = require('express');
var app = express();

// Use the Pug templating language and set the view directory to /views
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// on home page request
app.get('/', function (request, response) {
  response.render('index');
});

// on all other get requests
app.get('/:query', function (request, response) {
  // extract string from query
  var string = request.params.query;
  // create object to be sent as result
  var result = {};
  // if string is not a number
  if (isNaN(string)) {
    // if the string contains a valid date string
    if (Date.parse(string)) {
      // fill in result object with the unix timestamp and the natural language form of date
      result.unix = Math.floor(Date.parse(string) / 1000);
      result.natural = string;
      console.log('Success: ' + JSON.stringify(result));
    // if the string doesn't contain a valid date string
    } else {
      // full in object's unix timestamp and natural language form of date with nothing
      result.unix = null;
      result.natural = null;
      console.log('Failure: ' + JSON.stringify(result));
    }
  // if string is a number
  } else {
    // fill in result object with unix time stamp and natural language date
    var d = new Date(string * 1000);
    var array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = array[d.getMonth()];
    var date = d.getDate();
    var year = d.getFullYear();
    result.unix = Number(string);
    result.natural = month + ' ' + date + ', ' + year;
    console.log('Success: ' + JSON.stringify(result));
  }
  // print resulting object
  response.end(JSON.stringify(result));
});

// listen to port 8080 for connections
app.listen(process.env.PORT || 8080, function (request, response) {
  console.log('Listening for connections...');
});
