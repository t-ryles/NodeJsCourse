const request = require('postman-request');
const forecastKey = require('./forecastKey');

//ToDO Define function
const forecast = (lat, long, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=${forecastKey}&query=${long},${lat}&units=f`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location service.');
		} else if (body.success === false) {
			callback(body.error.info);
		} else {
			callback(
				undefined,
				`${body.current.weather_descriptions[0]}. It is currently ${body.current
					.feelslike}° outside, it feels like ${body.current.temperature}°.`
			);
		}
	});
};

//ToDo Export function
module.exports = forecast;
