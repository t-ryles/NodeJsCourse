const geoCode = require('./utils/geoCode');

const forecast = require('./utils/forecast');

// const urlWearther =
// 	'http://api.weatherstack.com/current?access_key=75cbea6d42fc13e01e04af564654cb19&query=37.8267,-122.4233&units=f';

// request({ url: urlWearther, json: true }, (error, res) => {
// 	//? Error handling, if error has value then res won't and vice versa
// 	if (error) {
// 		console.log('Unable to connect to weather service.');
// 	} else if (res.body.error) {
// 		console.log('Unable to find location.');
// 	} else {
// 		//? Adding the json: true object to the request property will return a json object
// 		// const data = JSON.parse(res.body);
// 		// console.log(data.current);
// 		// console.log(res.body.current);

// 		currentTemp = res.body.current.temperature;
// 		feelsLike = res.body.current.feelslike;
// 		weatherDes = res.body.current.weather_descriptions[0];

// 		console.log(`${weatherDes}. It is currently ${currentTemp}° outside, it feels like ${feelsLike}°.`);
// 	}
// });

//! HTTP Request Challange

// const urlLatLong =
// 	'https://api.mapbox.com/geocoding/v5/mapbox.places/lincoln.json?access_token=pk.eyJ1IjoidGFqaGFrZWVtIiwiYSI6ImNrenhqZmpqaDAxemsybnJuNjZ0MzN2ejIifQ.WmAqi_mLZPaqKrhrZ8Dj_g&limit=1';

// request({ url: urlLatLong, json: true }, (error, res) => {
// 	// console.log(res.body);
// 	if (error) {
// 		console.log('Unable to connect to location service.');
// 	} else if (res.body.features.length === 0) {
// 		console.log('Unable to find location. Check search term.');
// 	} else {
// 		lat = res.body.features[0].center[1];
// 		long = res.body.features[0].center[0];

// 		console.log(`The latitude is ${lat} and longitude is ${long}.`);
// 	}
// });

//! Weather Request Challenge

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

//ToDo Call function
geoCode('Kansas', (error, geoCodeData) => {
	if (error) {
		return console.log(error);
	}
	//? Error if we don't get data back
	//console.log('Error', error);
	//ToDo Call function
	forecast(geoCodeData.long, geoCodeData.lat, (error, forecastData) => {
		if (error) {
			return console.log(error);
		}
		//console.log('Error', error);
		//console.log('Data', forecastData);
		console.log(geoCodeData.loc);
		console.log(forecastData);
	});
});
