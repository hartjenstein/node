const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('viewengine', 'hbs');
app.use(express.static(__dirname + "/public"));
// handler for an http get request
app.get('/', (req, res) => {
   // res.send('<h1>Hello Express</h1>');
   res.send({
       name: 'Norbert',
       likes: ['you know what', 'my favorite records']
   });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
    });
});
     


app.get('/bad', (req, res) => {
    res.send({
    errorMessage: 'Bad Connection!'
    });
});

// binds the application to a port on our machine
app.listen(3000);