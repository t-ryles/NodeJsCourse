const request = require('postman-request');
const forecastKey = require('./forecastKey.js');

//ToDO Define function
const forecast = (lat, long, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=${forecastKey}&query=${long},${lat}&units=f`;

	request({ url: url, json: true }, (error, res) => {
		if (error) {
			callback('Unable to connect to location service.');
		} else if (res.body.success === false) {
			callback(res.body.error.info);
		} else {
			callback(
				undefined,
				`${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current
					.feelslike}° outside, it feels like ${res.body.current.temperature}°.`
			);
		}
	});
};

//ToDo Export function
module.exports = forecast;
