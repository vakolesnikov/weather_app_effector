const host = 'http://api.openweathermap.org/data/2.5/';
const userId = 'de1d40a790b506636e2f125ec672ad40';

const UnitsType = {
    METRIC: 'metric'
};

const requestParams = `&appid=${userId}&units=${UnitsType.METRIC}`;

export default {
    searchCity: city => {
        return fetch(`${host}find?q=${city}${requestParams}`)
            .then(res => res.json())
            .catch(err => console.error(err));
    },
    getWeatherByCityId: id => {
        return fetch(`${host}weather?id=${id}${requestParams}`)
            .then(res => res.json())
            .catch(err => console.error(err));
    },
    getWeatherByCityCoordinates: (lat, lon) => {
        return fetch(`${host}/weather?lat=${lat}&lon=${lon}${requestParams}`)
            .then(res => res.json())
            .catch(err => console.error(err));
    },
    getWeatherByGroupCityId: ids => {
        return fetch(`${host}group?id=${ids.join(',')}${requestParams}`)
            .then(res => res.json())
            .catch(err => console.error(err));
    }
};
