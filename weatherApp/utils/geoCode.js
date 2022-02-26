const request = require('postman-request');
const geoCodeKey = require('./geoCodeKey.js');

//ToDO Define a function
const geoCode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${geoCodeKey}&limit=1`;

	request({ url: url, json: true }, (error, res) => {
		if (error) {
			callback('Unable to connect to location service.');
		} else if (res.body.features.length === 0) {
			callback('Unable to find location. Check search term.');
		} else {
			//? When the callback runs, it making sure there in no value for error,
			//? Just a value for data
			callback(undefined, {
				//? When things go well, we will get back this object of data.
				long: res.body.features[0].center[0],
				lat: res.body.features[0].center[1],
				loc: res.body.features[0].place_name
			});
		}
	});
};

//ToDO Export geoCode function
module.exports = geoCode;
