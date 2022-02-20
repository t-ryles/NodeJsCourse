//ToDO Convert JS object to JSON

const { log } = require('console');
const fs = require('fs');

//* Book is the JS object
// const book = {
// 	title: 'User Friendly',
// 	author: 'Cliff Kuang',
// 	coauthor: 'Robert Fabricant'
// };

//* Convert to JSON
// const bookJSON = JSON.stringify(book);
//? JSON.stringify takes in an object and give back a string of JSON data
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
//?JSON.parse takes in JSON data and returns a JS object back
// console.log(parsedData.author);

//? Creating a new file for JSON data
// fs.writeFileSync('json_1.json', bookJSON);

//? Always us to read a file
//? Return vaule is binary data
const dataBuffer = fs.readFileSync('json_1.json');

//? to.String methdom returns legible data
const dataJSON = dataBuffer.toString();

//? Parsing the dataJSON
const info = JSON.parse(dataJSON); // Parsing that dataJSON into a JS object

info.name = 'Taj';
info.age = 31;

infoJSON = JSON.stringify(info);

fs.writeFileSync('json_1.json', infoJSON);
