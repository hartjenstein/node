const request = require('request');


request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=101b+richardstrasse,+12043,+berlin,+deutschland',
    json: true
}, (error, response, body) => {
    console.log(`Adress: ${body.results[0].formatted_adress}`);
});

