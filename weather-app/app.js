const request = require('request');
const yargs = require('yargs');

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

const encodeAdress = encodeURIComponent(argv.a);

// error, response, body are the built 
// in arguements for the request package

// json: true - tells request that it is json data and that it should convert
    // the string to an object - saves us the work
request({
   url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAdress}`,
  json: true
}, (error, response, body) => {
  if(error) {
      console.log('Unable to connect to Google sever');
  } else if(body.status === 'ZERO_RESULTS') {
      console.log('Unable to find adress');    
  } else if(body.status === 'OK'){
  console.log(`Adress: ${body.results[0].formatted_address}`);
  console.log(`lat: ${body.results[0].geometry.location.lat}`);
  console.log(`long: ${body.results[0].geometry.location.lng}`);
  }
});
// -----Exkurs: Pretty Printing objects ---- 
    // ----------------------------------
    // second arguement of stringify specifies a filter - pretty useless - third arguement defines indentations
    // console.log(JSON.stringify(body, undefined, 2));