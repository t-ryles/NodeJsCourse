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

const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');

const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');

inputOne.textContent = '';

weatherForm.addEventListener('submit', (e) => {
	const userInputSearch = searchInput.value;

	const url = `/weather?address=${userInputSearch}`;
	//? e is the eventObject that is generated from the event listener.
	e.preventDefault();

	//Todo Loading message
	inputOne.textContent = 'Gathering forecast data...';
	inputTwo.textContent = '';

	fetch(url).then((res) => {
		res.json().then((data) => {
			//? Check for error
			if (data.error) {
				//Todo dynamicly generate weather data to web page
				inputOne.textContent = data.error;
			} else {
				inputOne.textContent = data.Location;
				inputTwo.textContent = data.Forecast;
			}
		});
	});
});
