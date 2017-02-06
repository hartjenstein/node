const request = require('request');

const geoWeather = (latitude, longitude, callback) => {
request({
    url: `https://api.darksky.net/forecast/8b1d49610a28fda753d463ab2c00743d/${latitude},${longitude}`,
    json: true
    }, (error, response, body) => {  
    if(!error && response.statusCode === 200) {
        callback(undefined, {
           Temperature: body.currently.temperature
        }); 
    } else {
        callback('Unable to fetch Weather');    
    }
    });
};
module.exports.geoWeather = geoWeather;