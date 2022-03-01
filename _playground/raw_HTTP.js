//Todo Recreating an HTTP request

const http = require('http');
const forecastKey = require('./forecastKey');

const url = `http://api.weatherstack.com/current?access_key=${forecastKey}&query=40.8068,-96.7004&units=f`;

//? Hiring off the request
const request = http.request(url, (res) => {
	let data = '';
	res.on('data', (chunk) => {
		data += chunk.toString();
	});
	res.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on('error', (error) => {
	console.log('An error', error);
});

request.end();
