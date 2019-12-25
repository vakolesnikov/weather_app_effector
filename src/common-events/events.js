import { createEvent, createEffect } from 'effector';
import api from 'src/api';

const MIN_CITY_NAME_LENGTH = 3;

export const initApp = createEffect('initApp').use(() => {
    const citiesIds = api.storage.getCitiesIds();

    if (citiesIds.length) {
        return api.weather.getWeatherByGroupCityId(citiesIds);
    }

    return null;
});
export const searchCity = createEffect('getCities').use(city => {
    if (city.length >= MIN_CITY_NAME_LENGTH) {
        return api.weather.searchCity(city);
    }

    return null;
});
export const addCity = createEffect('addCity').use(id => api.weather.getWeatherByCityId(id));
export const getCityForGeoLocation = createEffect('setGeoLocation').use(({ latitude, longitude }) =>
    api.weather.getWeatherByCityCoordinates(latitude, longitude)
);
export const getGeoLocation = createEffect('getGeoLocation').use(() =>
    api.geolocation.getCurrentPosition(getCityForGeoLocation)
);

export const removeCitiesFound = createEvent('removeCitiesFound');
export const removeCity = createEvent('removeCity');
