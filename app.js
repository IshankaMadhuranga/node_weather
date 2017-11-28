
const yargs = require('yargs');
var geoAddress=require('./location/location.js');

const argv = yargs
  .options({
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

geoAddress.geocodeAddress(encodeURIComponent(argv.address),(errorMessage,result)=>{
if(errorMessage){
  console.log(errorMessage);
  }else{
    console.log(JSON.stringify(result,undefined,2));
  }

});


//console.log(encodedAddress);
//187ce69fb27c8fd48774991f7736782f
//https://api.darksky.net/forecast/187ce69fb27c8fd48774991f7736782f/37.8267,-122.4233