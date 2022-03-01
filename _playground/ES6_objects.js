//Todo Object Property Shorthand
//? Adding values to objects with a shortend sytax under certain condition

const name = 'Andrew';
const userAge = '27';

const user = {
	name,
	age: userAge,
	location: 'Lincoln'
};

console.log(user);

//Todo Object Destructuring
//? The goal of destructuring is to breakdown object properties and values into there own varaibles.

const product = {
	label: 'Red Notebook',
	price: 3,
	stock: 201,
	salePrice: undefined,
	rating: 4.3
};

// const label = product.label;
// const stock = product.stock;

// const { label, stock } = product;

// //? Printing out product.key values
// console.log(label);
// console.log(stock);

// //? Renaming a current key
// const { label: productLabel, stock } = product;
// console.log(productLabel);

// //? Adding a key that is not in the object
// const { label: productLabel, stock, rating } = product;
// console.log(rating);

//? Setting a default value for a key
const { label: productLabel, stock, rating = 5 } = product;
console.log(productLabel);
console.log(stock);
console.log(rating);

//Todo
//? Desturcturing the object in the function setup
const transaction = (type, { label, stock }) => {
	console.log(type, label, stock);
};

transaction('order', product);
