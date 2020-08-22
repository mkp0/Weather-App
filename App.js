const request = require("request");
const geocode = require("./Geocode");
const forecast = require("./Forecast");

const command = process.argv[2];
if (!command) {
  console.log("Enter a city name!!");
} else {
  geocode(command, (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log("PlaceName :\t", res.PlaceName);
    forecast(res.latitude, res.longitude, (error, data) => {
      if (err) {
        return console.log(err);
      }
      console.log("Weather : \t", data.weather[0].description);
    });
  });
}

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
