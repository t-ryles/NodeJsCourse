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

		// db
		// 	.collection('users')
		// 	.updateOne(
		// 		{
		// 			_id: new ObjectID('6235eb3ad2bf72024f5820e7')
		// 		},
		// 		{
		// 			$inc: {
		// 				age: -1
		// 			}
		// 		}
		// 	)
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		//ToDo: Challange
		db
			.collection('tasks')
			.updateMany(
				{
					completed: false
				},
				{
					$set: {
						completed: true
					}
				}
			)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}
});
