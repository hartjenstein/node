const request = require('request');

// error, response, body are the built 
// in arguements for the request package

// json: true - tells request that it is json data and that it should convert
    // the string to an object - saves us the work!

request({
   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=101b+richardstrasse,+12043,+berlin,+deutschland',
  json: true
}, (error, response, body) => {
  console.log(`Adress: ${body.results[0].formatted_address}`);
  console.log(`lat: ${body.results[0].geometry.location.lat}`);
  console.log(`long: ${body.results[0].geometry.location.lng}`);
});
// -----Exkurs: Pretty Printing objects ---- 
    // ----------------------------------
    // second arguement of stringify specifies a filter - pretty useless - third arguement defines indentations
    // console.log(JSON.stringify(body, undefined, 2));