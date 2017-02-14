const express = require('express');

let app = express();


describe('server', () => {
    
    app.get('/', (req, res) => {
        res.status(404).send({
            error: 'Page Not Found!',
            name: 'Todo App v1.0'
        });
    });

    app.get('/users', (req, res) => {
        res.status(200).send([
            {  
            age: '25',
            name: 'Sammy'
            },
            {   
            age: '37',
            name: 'nick'
            },
        ]);
    });
});
app.listen(3000);   

module.exports.app = app; 