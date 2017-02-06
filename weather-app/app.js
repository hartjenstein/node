const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

// passing in the adress as a string through --adress=""
const argv = yargs.options({
    a: {
        demand: true,
        alias: 'adress',
        describe: 'Adress to fetch weather for',
        string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
 // geocode.geocodeAdress() takes a callback as the second arguement which gets the errors passed over from geocode.js
geocode.geocodeAdress(argv.adress, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});

weather.geoWeather(39.757114, -90.94686399999999, (errorMessage, result) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
    }
});    
