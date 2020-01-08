import { createEffect, createEvent, createStore } from 'effector';

import * as weatherApi from 'src/api/weather-api';
import * as storageApi from 'src/api/storage-api';
import * as geolocationApi from 'src/api/geolocation-api';

const ONE_MINUTE = 60000;
const MIN_CITY_NAME_LENGTH = 3;

export const removeCitiesFound = createEvent('removeCitiesFound');
export const removeCity = createEvent('removeCity');
export const startUpdate = createEvent('startUpdate');

export const initApp = createEffect('initApp').use(() => {
    const citiesIds = storageApi.getCitiesIds();

    if (citiesIds.length) {
        return weatherApi.getWeatherByGroupCityId(citiesIds);
    }

    return null;
});
export const searchCity = createEffect('getCities').use(city => {
    if (city.length >= MIN_CITY_NAME_LENGTH) {
        return weatherApi.searchCity(city);
    }

    return null;
});
export const addCity = createEffect('addCity').use(id => weatherApi.getWeatherByCityId(id));
export const getCityForGeoLocation = createEffect('setGeoLocation').use(({ latitude, longitude }) =>
    weatherApi.getWeatherByCityCoordinates(latitude, longitude)
);
export const getGeoLocation = createEffect('getGeoLocation').use(() =>
    geolocationApi.getCurrentPosition(getCityForGeoLocation)
);

export const showUpdateLoader = createStore(false)
    .on(initApp.done, () => false)
    .on(startUpdate, () => true);

export const defaultCity = createStore({ status: 'load' }).on(
    getCityForGeoLocation.done,
    (_, res) => res.result
);

export const foundCities = createStore([])
    .on(searchCity.done, (_, res) => {
        if (res.result) {
            return res.result.list;
        }
        return [];
    })
    .reset(removeCitiesFound);

export const favoriteCities = createStore([])
    .on(initApp.done, (state, { result }) => (result ? result.list : state))
    .on(addCity.done, (cities, res) => {
        const { result } = res;

        if (!cities.find(({ id }) => id === result.id)) {
            storageApi.addCity(result.id);
            return [...cities, result];
        }

        return cities;
    })
    .on(removeCity, (cities, id) => {
        storageApi.removeCity(id);
        return cities.filter(city => city.id !== id);
    });

setInterval(() => {
    startUpdate();
    initApp();
}, ONE_MINUTE);
