// fs - filesystem - is needed to do basic read and write operations
const fs = require('fs');
// Lodash’s modular methods are great for:
  /* Iterating arrays, objects, & strings
    Manipulating & testing values
    Creating composite functions*/
const _ = require('lodash');
// command.argv doesnt let you set proper key: value pairs for objects.
//  yargs solves this problem and recognizes all possibilities of declarating key: value pairs
// for example: --title="" ; --title "" ; --title=
const yargs = require('yargs');

const notes = require('./notes.js');

// Setting up options and a help index for the yargs.argv


const yargsTitleOptions = {
      describe:'Title of note',
      demand: true,
      //the alias lets us run the flag abriviated 
      // for example in this case: -t instead of --title
      alias: 't'
      }
const yargsBodyOptions =  {
      describe: 'Body of the Note',
      demand: true,
      alias: 'b'
    }    
const argv = yargs.command('add', 'Add a new note', {
    //setting up a options object:
    title: yargsTitleOptions ,
    body: yargsBodyOptions,
  })
  .command('read', 'Read note', {
    title: yargsTitleOptions
  })
  .command('list', 'List all notes')
  .command('remove', 'Remove note', {
    title: yargsTitleOptions
  })
  .help()
  .argv;

  // The node core object process.argv property returns an array containing the 
  //command line arguments passed when the Node.js process was launched
  var command = argv._[0];
  // See process.argv0 if access to the original value of 
  // argv[0] is needed
  if (command === 'add') {

  var note = notes.addNote(argv.title, argv.body);

  } else if (command === 'list') {

  var getAllNotes = notes.getAll();
  console.log(getAllNotes);
  console.log(`Printing: ${getAllNotes.length} Notes`);
  getAllNotes.forEach(note => notes.logNote(note));

  } else if (command === 'read') {

  var retrieveNote = notes.getNote(argv.title);
  retrieveNotes.logNote(retrieveNote);

  } else if (command === 'remove') {

  notes.removeNote(argv.title);

  } else {
  console.log('Command not recognized');
  }
