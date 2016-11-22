let axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=d18aeeca7f7aa2efebeb4d3d312f22cb&units=metric';

module.exports = {
    getTemp: function(location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(function(response) {
            if (response.data.cod === "200" && response.data.message === "accurate") {
                return response.data.list[0].main.temp;
            } else {
                throw new Error(response.data.message);
            }
        }, function(err) {
            throw new Error(err.data.message);
        });
    }
};