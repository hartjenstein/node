console.log('starting Note.js');

// exporting modules:
module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';
}

// use the process object to get access to built in arguments
// .argv - arguements vector
var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add') { 
    console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');  
} else if (command === 'read') {
  console.log('Reading all notes');
} else if (command === 'remove') {
  console.log('Removing all notes');
} else {
  console.log('Command not recognized');
}