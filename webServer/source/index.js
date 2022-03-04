const path = require('path');
const express = require('express');

const publicDirectoryPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicDirectoryPath));

// App.get() taks in two argurment, route and function
// function describe what we want to do whens someone visits that route
// / after app.com = new route

//app.com
//app.com/help
//app.com/about

//? Setting a route to the 'Help' page
// app.get('/help', (req, res) => {
// 	res.send({
// 		name: 'Taj',
// 		age: 31,
// 		location: 'Lincoln'
// 	});
// });

//ToDo Set up route for 2 new pages: About and Weather
// app.get('/about', (req, res) => {
// 	res.send('<h1>Hello from About</h1>');
// });

app.get('/weather', (req, res) => {
	res.send({
		// ALT + 0176 = °
		forecast: '45° and Sunny',
		location: 'Lincoln, Ne'
	});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
