//ToDo: Build CRUD operations

// const mongoDB = require('mongodb');
// //? Mongo client gives us access to the fuction necessary to connect to the database for the CRUD operations
// const MongoClient = mongoDB.MongoClient;
// //?Getting MongoBD ID
// const ObjectID = mongodb.ObjectID;

//! Desturcted version ^
const { MongoClient, ObjectID } = require('mongodb');

//? URL for the database
const connectionURL = 'mongodb://127.0.0.1:27017';
//? Database name
const databaseName = 'taskManager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	//? Conneting to the database is an asychronous function
	if (error) {
		//? Return will prevent the else statmanet from running
		return console.log('Unable to connect to database');
	} else {
		//? Will run when connnection to database is made

		//console.log('Connected to database');
		//?client.db takes in the database name we made and returns a referance to that database.
		//?Referance is stored in a new varible = db
		const db = client.db(databaseName);

		// db.collection('users').findOne({ _id: new ObjectID('622e1dbb137741022536057b') }, (error, user) => {
		// 	if (error) {
		// 		return console.log('Unable to fetch');
		// 	} else {
		// 		console.log(user);
		// 	}
		// });

		// db.collection('users').find({ age: 31 }).toArray((error, users) => {
		// 	if (error) {
		// 		return console.log('Error');
		// 	} else {
		// 		console.log(users);
		// 	}
		// });

		// db.collection('users').find({ age: 31 }).count((error, count) => {
		// 	if (error) {
		// 		return console.log('Error');
		// 	} else {
		// 		console.log(count);
		// 	}
		// });

		//ToDo Challenge
		db.collection('tasks').findOne({ _id: new ObjectID('622e1f730cea94022c28e062') }, (error, task) => {
			if (error) {
				return console.log('Unable to fetch');
			} else {
				console.log(task);
			}
		});

		db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
			if (error) {
				return console.log('Error');
			} else {
				console.log(tasks);
			}
		});
	}
});
