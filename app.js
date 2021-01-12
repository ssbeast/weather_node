const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=66d07cf3dbcf6a5e983de85404b5574c&query=42.3605,-71.0596&units=f'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
})