//! Exploring Callbacks

// //? Callback function is an argument we provide for another function.
// //? ie: () => {console.log('2 sec are up.')} -is a callback function

// setTimeout(() => {
// 	console.log('2 sec are up.');
// }, 2000);

// const names = [ 'Mathew', 'Jen', 'Jess' ];

// const shortNames = names.filter((name) => {
// 	return name.length <= 4;
// });

// const geoCode = (address, callback) => {
// 	setTimeout(() => {
// 		const data = {
// 			latitude: 0,
// 			longitude: 0
// 		};
// 		callback(data);
// 	}, 2000);
// };
// geoCode('Lincoln', (data) => {
// 	console.log(data);
// });

// const add = (x, y, callback) => {
// 	setTimeout(() => {
// 		callback(x + y);
// 	}, 2000);
// };

// add(1, 4, (sum) => {
// 	console.log(sum); // Should print: 5
// });

//! Eploring Promises

const doWorkCallback = (callback) => {
	setTimeout(() => {
		callback('Error', undefined);
	}, 2000);
};

doWorkCallback((error, result) => {
	if (error) {
		return console.log(error);
	}
	console.log(result);
});
