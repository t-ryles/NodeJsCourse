//Requiring Mongoose
const mongoose = require('mongoose');

//Connecting to out MongoDB server
mongoose.connect('mongodb://127.0.0.1:27017/taskManager-api', {
	useNewUrlParser: true
});

// //Defining a model
// const User = mongoose.model('User', {
// 	name: {
// 		type: String
// 	},
// 	age: {
// 		type: Number
// 	}
// });

// //Creating an instance of the model
// const me = new User({ name: 'Taj', age: 25 });

// //Saving the instance to out server
// me
// 	.save()
// 	.then(() => {
// 		console.log(me);
// 	})
// 	.catch((error) => {
// 		console.log('Error: ' + error);
// 	});

//ToDo: Create a model for Tasks.

const Task = mongoose.model('Task', {
	description: {
		type: String
	},
	completed: {
		type: Boolean
	}
});

const task = new Task({ description: 'Laundry', completed: false });

task
	.save()
	.then(() => {
		console.log(task);
	})
	.catch((error) => {
		console.log('Error: ', error);
	});
