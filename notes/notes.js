console.log('Starting notes.js');

      // no need to install fs because its a core node module
const fs = require('fs');

var fetchNotes = () => {
      // ---- in order to catch errors we will install a try catch block. 
  try {
      // fetching the .json file could cause problems when the data is missing or the file is corrupted
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
      // catch block takes error arguement (e)
      // code only runs if an error in the try block actually occurs
  } catch (e) {
    return[];
  } 
};

var savedNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
      //shortend es6 syntax for object properties..
  var note = {
    title,
    body
  };



var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
  notes.push(note);
  savedNotes(notes);
  logNote(note);
  return note;
  } else {
    console.log('Note already exists');
  }
};

var logNote = (note) => console.log(`---- Title ---- \n ${note.title} \n ---- Body ---- \n ${note.body}`);

 var getAll = () => {
   return fetchNotes();
 };
var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title === title);
  return filteredNotes[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title !==  title);
  savedNotes(filteredNotes);
    if(notes.length != filteredNotes.length) {
      console.log((notes.length - filteredNotes.length) + " Notes were removed")
    } else {
      console.log("No Notes removed");
    }
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
