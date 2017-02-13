console.log('Starting notes.js');


var addNote = (title, body) => {
  console.log('Adding Note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
};
var readNote = (title) => {
  console.log('Reading Note: ', title);
};
var removeNote = (title) => {
  console.log('Remove Note: ', title);
};
module.exports = {
  // ES6 short cut for property addNote: addNote and identical variable
  // instead of addNote: addNote just -> addnote
  // alternatively - addNote: AddNote
  addNote,
  // alternatively - getAll: getAll
  getAll,
  readNote,
  removeNote
}; 