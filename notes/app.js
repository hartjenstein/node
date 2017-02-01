console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  var getAllNotes = notes.getAll();
  console.log(getAllNotes);
  console.log(`Printing: ${getAllNotes.length} Notes`);
  getAllNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  notes.logNote(note);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
