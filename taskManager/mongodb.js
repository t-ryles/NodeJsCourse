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

		db
			.collection('users')
			.deleteMany({
				//? If you wanted to Delete items based off of multiple criteria you can add then here as well.
				age: 31
				//name: 'Taj-Hakeem',
			})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});

		//ToDo: Use deleteOne to remove a task

		db
			.collection('tasks')
			.deleteOne({
				descript: 'Laundry'
			})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}
});
