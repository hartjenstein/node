const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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
 // geocode.geocodeAdress() takes a callback as the second arguement which gets the errors passed over from geocode.js
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
     
        weather.geoWeather(results.lat, results.long, (errorMessage, weatherResults) => {
            if(errorMessage) {
            console.log(errorMessage);
            } else {
            console.log(`Its ${weatherResults.temperature} Degrees Fahrenheit. \n It feels like ${weatherResults.apparentTemp}`);
            }
        });
    }
});

    
