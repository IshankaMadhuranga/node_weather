const request = require('request');
   
    request({
        url: `https://api.darksky.net/forecast/187ce69fb27c8fd48774991f7736782f/37.8267,-122.4233`,
        json: true
    }, (error, response, body) => {
        console.log(response.statusCode);
        if (error) {
            console.log('Unable to connect forecast.io servers.');
        } else if (response.statusCode === 400) {
            console.log('Unable to fatch tha forcast data.');
        } else if (response.statusCode === 200) {
            console.log(`Weather: ${body.currently.temperature}`);
        }
    });

