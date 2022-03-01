const request = require('postman-request');
const geoCodeKey = require('./geoCodeKey.js');

//ToDO Define a function
const geoCode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${geoCodeKey}&limit=1`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location service.');
		} else if (body.features.length === 0) {
			callback('Unable to find location. Check search term.');
		} else {
			//? When the callback runs, it making sure there in no value for error,
			//? Just a value for data
			callback(undefined, {
				//? When things go well, we will get back this object of data.
				long: body.features[0].center[0],
				lat: body.features[0].center[1],
				loc: body.features[0].place_name
			});
		}
	});
};

//ToDO Export geoCode function
module.exports = geoCode;
