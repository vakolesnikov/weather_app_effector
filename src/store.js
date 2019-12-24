import { createStore } from 'effector';
import * as events from './events';
import api from './api';

export const foundCities = createStore([]);
export const favoriteCities = createStore([]);
export const citiesIds = createStore([]);
export const defaultCity = createStore({ status: 'load' });

foundCities
    .on(events.searchCity.done, (_, res) => {
        if (res.result) {
            return res.result.list;
        }
        return [];
    })
    .reset(events.removeCitiesFound);

favoriteCities
    .on(events.initApp.done, (state, { result }) => (result ? result.list : state))
    .on(events.addCity.done, (cities, res) => {
        const { result } = res;

        api.storage.addCity(result.id);
        return [...cities, result];
    })
    .on(events.removeCity, (cities, id) => {
        api.storage.removeCity(id);
        return cities.filter(city => city.id !== id);
    });

citiesIds
    .on(events.initApp.done, () => api.storage.getCitiesIds())
    .on(events.addCity.done, (ids, res) => {
        const { result } = res;

        if (result.cod === 200) {
            return [...ids, result.id];
        }

        return ids;
    })
    .on(events.removeCity, (ids, id) => ids.filter(cityId => cityId !== id));

defaultCity.on(events.getCityForGeoLocation.done, (_, res) => res.result);
