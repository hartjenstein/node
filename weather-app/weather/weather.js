const request = require('request');

var geoWeather = (lat, long, callback) => {
    console.log( lat, long);
request({
    url: `https://api.darksky.net/forecast/8b1d49610a28fda753d463ab2c00743d/${lat},${long}`,
    json: true
    }, (error, response, body) => {  
    if(!error && response.statusCode === 200) {
        callback(undefined, {
           temperature: body.currently.temperature,
           apparentTemp: body.currently.apparentTemperature
        }); 
        
    } else {
        callback('Unable to fetch Weather');    
    }
    });
};
module.exports.geoWeather = geoWeather;