import { createEvent, createEffect } from 'effector';
import api from './api';

const MIN_CITY_NAME_LENGTH = 3;

export const addCity = createEvent('addCity');
export const setCitiesFound = createEvent('setCitiesFound');
export const searchCity = createEffect('getCities');

searchCity.use(city => {
    if (city.length >= MIN_CITY_NAME_LENGTH) {
        return api.weather.searchCity(city);
    }
});
