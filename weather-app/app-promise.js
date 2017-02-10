
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const axios = require('axios');

// passing in the adress as a string through --adress=""
const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
     
const encodeAddress = encodeURIComponent(argv.address);
const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

// no need for further arguements - axios knows how to automatically parse JSON data and returns a promise.
// we are saving lots of code by using built-in promises. No need for callback functions and wrapping in promises.
axios.get(geoCodeUrl).then((response) => {
    if(response.data.status === "ZERO_RESULTS") {
        // with throw new Error we are stopping the execution of the function - the console.log never prints and move on to the catch error code below
        throw new Error("Address doesnt exist");
    }    
const lat = response.data.results[0].geometry.location.lat;
const long = response.data.results[0].geometry.location.lng;
console.log(response.data.results[0].geometry.location.long);
console.log(response.data.results[0].geometry.location.lat);
let weatherUrl = `https://api.darksky.net/forecast/8b1d49610a28fda753d463ab2c00743d/${lat},${long}`;      
console.log(response.data.results[0].formatted_address);
// --- returning a new promise, this makes it possible to chain another promise down below which gets called when the weather data comes back

return axios.get(weatherUrl);

})
.then((response) => {
    var temperature = response.data.currently.temperature;
    var appTemp = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature} Fahrenheit. The felt temperature is ${appTemp} degrees Fahrenheit`);
})
.catch((e) => {
    if(e.code === "ENOTFOUND") {
        console.log('Unable to connect to API servers.');
    } else {
        // the e.message property prints the error thrown above - throw new Error("Address doesnt exist");
        console.log(e.message);
    }
    
});