// server file is just for our routes now
let express = require('express');
//body-parser converts JSON into an object 
let bodyParser = require('body-parser');
// destructing object - ES6 (saving the mongoose return value in the variable)
let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');

let app = express();
//crud - create read update delete

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
   let todo = new Todo({
       text: req.body.text
    });

    todo.save().then((doc) => {
    res.send(doc);
    }, (e) => {
    res.status(400).send(e);
    });
});
app.listen(3000, () => {
    console.log('started on port 3000');
});

// ES& syntax
module.exports = {app};