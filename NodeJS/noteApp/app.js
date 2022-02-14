const yargs = require('yargs');
const chalk = require('chalk');

const notes = require('./notes.js');
const { describe, demandOption, string, argv } = require('yargs');

//const command = process.argv[2];

// console.log(process.argv);

// if (command === 'add') {
// 	console.log('Adding note...');
// } else if (command === 'remove') {
// 	console.log('Removing note...');
// }

//console.log(process.argv);
//* Customizing Yargs version
yargs.version('1.1.0');

//* Commands
//? Add Note
yargs.command({
	command: 'add',
	describe: 'Adds new note', // Descrip not needed, but useful
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true, // Setting title option to required
			type: 'string' // Setting input type
		},
		body: {
			describe: 'Details about note',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		//console.log(`Title: ${argv.title}`);
		//console.log(`Body: ${argv.body}`); // Displaying just the title in the console.
		notes.addNote(argv.title, argv.body);
	}
});

//? Remove Notes
yargs.command({
	command: 'remove',
	describe: 'Removes note for app',
	builder: {
		title: {
			describe: 'Title to remove',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		notes.removeNote(argv.title);
	}
});

//? Read Notes
yargs.command({
	command: 'read',
	describe: 'Reading note from app',
	handler: function() {
		console.log('Reading a note from app...');
	}
});

//? List Notes
yargs.command({
	command: 'list',
	describe: 'Listing out notes from app',
	handler: function() {
		console.log('Note on app are...');
	}
});

// Yargs is parsing the argv command without console.loging them.
//! Romoving this will break app
yargs.parse();
