//ToDo: Build CRUD operations

const mongoDB = require('mongodb');

//? Mongo client gives us access to the fuction necessary to connect to the database for the CRUD operations
const MongoClient = mongoDB.MongoClient;

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

		//? NoSQL deal with data in collections
		// //* insertOne allows you to insert a single doc into a collection
		// db.collection('users').insertOne({
		// 	//? insertone is an asyn function
		// 	name: 'Taj-hakeem',
		// 	age: 31
		// }, (error, result) => {
		// 	//? Callback function called when insertOne is complete
		// 	//? If the error object ex
		// 	if (error) {
		// 		return console.log('Unable to insert user.');
		// 	}
		// 	console.log(result.ops);
		// });

		//? insertMany wil insert more than one document
		// db.collection('users').insertMany([
		// 	{
		// 		name: 'Jen',
		// 		age: 28
		// 	},
		// 	{
		// 		name: 'Tod',
		// 		age: 53
		// 	}
		// ], (error, result) => {
		// 	if (error) {
		// 		return console.log('Unable to insert users');
		// 	}
		// 	console.log(result.ops);
		// });

		//Todo: Challenge
		db.collection('tasks').insertMany([
			{
				descript: 'Node.Js course',
				completed: false
			},
			{
				descript: 'Groceries',
				completed: true
			},
			{
				descript: 'Laundry',
				completed: true
			}
		], (error, result) => {
			if (error) {
				return console.log('Unable to insert task.');
			}
			console.log(result.ops);
		});
	}
});
