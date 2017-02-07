const request = require('request');
 
var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
    const encodeAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        json: true
        }, (error, response, body) => {
            if(!error && body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    long: body.results[0].geometry.location.lng
                });  
            } else { 
                reject('Unable to find adress'); 
            }
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
    }, (errorMessage) => {
        console.log(errorMessage);
});
