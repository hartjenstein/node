
//                                           ---- LOGIC ----
const request = require('request');
var geocodeAdress = (adress, callback) => {

    const encodeAdress = encodeURIComponent(adress);

    // - > error, response, body are the built 
    // in arguements for the request package

    // - > json: true - tells request that it is json data and that it should convert
        // the string to an object - saves us the work
    request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAdress}`,
    json: true
    }, (error, response, body) => {
    if(error) {
        callback('Unable to connect to Google sever');
    } else if(body.status === 'ZERO_RESULTS') {
         callback('Unable to find adress');    
    } else if(body.status === 'OK'){
        // first arguement errorMessage is undefined here because everything went ok 
        callback(undefined, {
            Adress: body.results[0].formatted_address,
            lat: body.results[0].geometry.location.lat,
            long: body.results[0].geometry.location.lng
        });
    }
    });
    // -----Exkurs: Pretty Printing objects ---- 
        // ----------------------------------
        // second arguement of stringify specifies a filter - pretty useless - third arguement defines indentations
        // console.log(JSON.stringify(body, undefined, 2));
};

// - > exports an object - we make the geocode function available on the object module.exports 
module.exports.geocodeAdress = geocodeAdress;