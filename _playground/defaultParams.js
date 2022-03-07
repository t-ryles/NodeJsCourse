const greeter = (name = 'User', age) => {
	//? To use default params, an = following the vaule sets the default value
	//? The vaule can be a string, boolean, number, array, object.
	console.log(`Hello ${name}!`);
};

greeter('Taj');
greeter();
