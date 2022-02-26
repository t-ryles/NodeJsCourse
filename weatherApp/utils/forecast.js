const request = require('postman-request');
const forecastKey = require('./forecastKey.js');

//ToDO Define function
const forecast = (lat, long, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=${forecastKey}&query=${lat},${long}&units=f`;

	console.log(lat);
	console.log(long);

	request({ url: url, json: true }, (error, res) => {
		if (error) {
			callback('Unable to connect to location service.');
		} else if (res.body.success === false) {
			callback(res.body.error.info);
		} else {
			callback(undefined, {
				currentTemp: res.body.current.temperature,
				feelsLike: res.body.current.feelslike,
				weatherDes: res.body.current.weather_descriptions[0]
			});
		}
	});
};

//ToDo Call function
forecast(-75.7088, 44.1545, (error, data) => {
	console.log('Error', error);
	console.log('Data', data);
});

//ToDo Export function
module.exports = forecast;
