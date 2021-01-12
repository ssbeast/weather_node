const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=66d07cf3dbcf6a5e983de85404b5574c&query=42.3605,-71.0596&units=f'

request({ url: url, json: true }, (error, response) => {
    if (error) {
              console.log('Unable to connect to weather service!')
           } else if (response.body.error) {
               console.log('Unable to find location')
        } else {
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
}
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3NiZWFzdCIsImEiOiJja2p1MnEzc2YwYjY4MndvNTV6dW5tdGQ4In0.xeHWb-emJHNb98zMJ4Zhhg&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})