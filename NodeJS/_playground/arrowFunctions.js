//! Arrow functions

// const sqr = function(x) {
// 	return x * x;
// };

//? Standard Arrow function
// const sqr = (x) => {
// 	return x * x;
// };

//? Shorthand Arrow function
//const sqr = (x) => x * x;

//console.log(sqr(3));

const event = {
	name: 'Birthday Party',
	guestList: [ 'Taj', 'Mat', 'John', 'Smith' ],
	//function
	// printGuestList: function() {
	// 	console.log(`Guest list for ${this.name}`);
	// }
	//*Output: Guest list for Birthday Party

	// printGuestList: function() {
	// 	console.log(`Guest list for ${this.name}`);
	// }
	//* Output: Guest list for undefined
	//? Arrow functions dont bind there own 'this' value
	//? 'This' doesn't have referce to the event object

	// Standard function with a 'this' binding
	//? Syntax is availiable when setting up methods on objects
	printGuestList() {
		console.log(`Guest list for ${this.name}`);

		this.guestList.forEach((guest) => {
			console.log(`${guest} is attending ${this.name}`);
		});
	}
	//*Output: Guest list for Birthday Party
};

event.printGuestList();
