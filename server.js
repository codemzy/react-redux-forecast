var express = require('express');
var app = express();

app.use(express.static('public'));

// set the port
app.set('port', (8081));

// allow cross-origin as get request from different port
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('dotenv').config();
const APIKEY = process.env.WEATHER_KEY;

// openweather-apis set up
var weather = require('openweather-apis');
weather.setUnits('metric');
weather.setAPPID(APIKEY);

// routes
// weather api route
app.route('/api/forecast/:location')
    .get(function(req, res) {
        var location = req.params.location;
        weather.setCity(location);
    	weather.getWeatherForecastForDays(3, function(err, result){
    	    if (err) {
    	        console.log(err);
    	    } else {
    	        res.json(result);
    	    }
    	});
});
    

// start the server
app.listen(app.get('port'), function() {
    console.log('Express server listening on port', app.get('port'));
});