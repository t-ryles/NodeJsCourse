console.log('Client side JS file is loaded!');
// //? Will be using the Fetch API for client side JS
// fetch('http://puzzle.mead.io/puzzle').then((res) => {
// 	//? Calling fetch kicks off an asynchronous ope.
// 	//? Fetch data from this URL, then do this function with the responce.
// 	res.json().then((data) => {
// 		console.log(data);
// 	});
// });

//Todo Fetch weather data from API endpoint we set up

const url = `http://localhost:3000/weather?address=boston`;

fetch(url).then((res) => {
	res.json().then((data) => {
		//? Check for error
		if (data.error) {
			console.log(data.error);
		} else {
			console.log(data.Location);
			console.log(data.Forecast);
		}
	});
});
