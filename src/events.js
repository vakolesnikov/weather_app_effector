import { createEvent, createEffect } from 'effector';
import api from './api';
import weatherApi from './api/weatherApi';

const MIN_CITY_NAME_LENGTH = 3;

export const searchCity = createEffect('getCities');
export const addCity = createEffect('addCity');
export const initApp = createEffect('initApp');
export const getGeoLocation = createEffect('getGeoLocation');
export const getCityForGeoLocation = createEffect('setGeoLocation');
export const removeCitiesFound = createEvent('removeCitiesFound');
export const removeCity = createEvent('removeCity');

searchCity.use(city => {
    if (city.length >= MIN_CITY_NAME_LENGTH) {
        return api.weather.searchCity(city);
    }

    return null;
});
addCity.use(id => api.weather.getWeatherByCityId(id));
initApp.use(() => {
    const citiesIds = api.storage.getCitiesIds();

    if (citiesIds.length) {
        return api.weather.getWeatherByGroupCityId(citiesIds);
    }

    return null;
});
getGeoLocation.use(() => {
    api.geolocation.getCurrentPosition(getCityForGeoLocation);
});
getCityForGeoLocation.use(({ latitude, longitude }) => {
    return weatherApi.getWeatherByCityCoordinates(latitude, longitude);
});
