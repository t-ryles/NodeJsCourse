const { log } = require('console');
const fs = require('fs');
const chalk = require('chalk');

const _success = chalk.bold.inverse.green;
const _error = chalk.bold.inverse.red;

const getNotes = () => {
	'Your notes...';
};

//todo Load Notes
const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

//todo Add Note
const addNote = (title, body) => {
	const notes = loadNotes();

	const duplicateNotes = notes.filter((note) => note.Title === title);

	if (duplicateNotes.length === 0) {
		notes.push({
			Title: title,
			Body: body
		});
		saveNotes(notes);
		console.log(_success('New note added.'));
	} else {
		console.log(_error('Note title taken.'));
	}
};

//Todo Save Notes
const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

//Todo Remove Note
const removeNote = (Title) => {
	const notes = loadNotes();

	const keepNotes = notes.filter((note) => note.Title !== Title);

	if (notes.length > keepNotes.length) {
		console.log(_success(`${Title} was removed`));
		saveNotes(keepNotes);
	} else {
		console.log(_error('No note found.'));
	}
};

//Todo Read Note

//Todo List Notes

//? Setting export to an object to export multiple objects
module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote
};
