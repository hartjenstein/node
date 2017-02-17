 let mongoose = require('mongoose');
// telling mongoose that we wanna use the built in promise library
 mongoose.promise = global.promise;
 mongoose.connect('mongodb://localhost:27017/TodoApp');

 let Todo = mongoose.model('Todo', {
     text: {
        type: String,
        required: true,
        minlength:1,
        trim: true
     },
     completed:{
        type: Boolean,
        default: false
     },
     completedAt: {
        type: Number,
        default: null 
     }
 });

/* let newTodo = new Todo({
     text: 'Cook dinner'
 });
 newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
 }, (e) => {
     console.log('Unable to save todo');
 });*/

 let newTodo2 = new Todo({
     text: 'Send package',
     completed: true,
     completedAt: 123
 });
 newTodo2.save().then((doc) => {
     console.log(JSON.stringify(doc, undefined, 2));
 }, (e) => {
    console.log('Unable to to save', e);
 });

 