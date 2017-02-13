const express = require('express');
const hbs = require('hbs');
const fs = require ('fs');

const port = process.env.PORT || 3000;
let app = express();

// partials are used as templates for site wide recurring html
hbs.registerPartials(__dirname + '/views/partials');

// setting up our express middleware together with handlebars for templating
app.set('view engine', 'hbs');


//middleware is used to configure express - adds on features
// app.use is how you register middleware
app.use((req, res, next) => {
  let now = new Date().toString();
  let log = (`${now} : ${req.method} ${req.url}`);
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err){
      console.log('Unable to write log');
    }
  });
  next();
});
/*app.use((req, res, next) => {
  res.render('maintenance.hbs');
});*/

app.use(express.static(__dirname + '/public'));

// helper functions - can be embeded in template - in this case in the footer
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcome: 'Oi, whats the crack?',
  });
});

app.get('/', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects',
    projectsWelcome: 'My personal projects',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
// test