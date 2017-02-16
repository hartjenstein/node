 let mongoose = require('mongoose');
// telling mongoose that we wanna use the built in promise library
 mongoose.promise = global.promise
 mongoose.connect('mongodb://localhost:27017/TodoApp');

 let Todo = mongoose.model('Todo', {
     text: {
        type: String
     },
     completed:{
        type: Boolean
     },
     completedAt: {
        type: Number 
     }
 });

 let newTodo = new Todo({
     text: 'Cook dinner'
 });
 newTodo.save().then(() => {
    console.log('Saved todo', doc);
 }, (e) => {
     console.log('Unable to save todo');
 });