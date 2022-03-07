const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geoCode = require('./utils/geoCode');

const forecast = require('./utils/forecast');

//! Defining paths for express configs
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../pages/views');
const partialsPath = path.join(__dirname, '../pages/partials');

const app = express();

//! Setting up handlebars engine and views location
// Setting the value for a given Express set.
// Displayed as a key:value pair
// Setting up handlebar
app.set('view engine', 'hbs');
// Pointing express to the custom directory
app.set('views', viewsPath);
// Config partials
hbs.registerPartials(partialsPath);

//! Seting up static directory to serve
app.use(express.static(publicDirectoryPath));

// Setting up index.hbs
app.get('', (req, res) => {
	// First: The render value name needs to match the file name without the extention.
	// Second: Is an object that contains all the values the view can access.
	res.render('index', {
		title: 'Weather App',
		name: 'Taj Ryles'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'Taj Ryles'
	});
});

//Todo Create template for help page
app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		name: 'Taj Ryles',
		message: 'Hello, what can I help you with?'
	});
});

// App.get() taks in two argurment, route and function
// function describe what we want to do whens someone visits that route
// / after app.com = new route

//app.com
//app.com/help
//app.com/about

// Setting a route to the 'Help' page
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

//ToDo Update endpoint to accept address
app.get('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: 'You must provide an address.'
		});
	} //Todo Wire up /weather to get back actual weather data
	geoCode(req.query.address, (error, { long, lat, loc }) => {
		if (error) {
			return res.send(error);
		}
		forecast(long, lat, (error, forecastData) => {
			if (error) {
				return res.send(error);
			}
			res.send({
				Location: loc,
				Forecast: forecastData,
				Address: req.query.address
			});
		});
	});
});

// app.get('/products', (req, res) => {
// 	//? This code will run if a search term is not provided.
// 	if (!req.query.search) {
// 		//? Return prevents header error, else statement would've also worked.
// 		return res.send({
// 			error: 'You must proved a search term.'
// 		});
// 	}
// 	console.log(req.query.search);
// 	res.send({
// 		products: []
// 	});
// });

//ToDO Build both 404 pages to render an HTML page

//* 404 Help page handler
app.get('/help/*', (req, res) => {
	res.render('404page', {
		title: '404',
		name: 'Taj Ryles',
		message: 'Help article not found.'
	});
});

//* Generic 404 Page handler
app.get('*', (req, res) => {
	//? * express wild card rout handler, it matches anything that hasn't been match alread.
	res.render('404page', {
		title: '404',
		name: 'Taj Ryles',
		message: 'Page Not Found.'
	});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
