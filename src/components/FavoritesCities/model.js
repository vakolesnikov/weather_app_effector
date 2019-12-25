import { createStore } from 'effector';
import api from 'src/api/index';
import { initApp, addCity, removeCity } from 'src/events';

export const favoriteCities = createStore([])
    .on(initApp.done, (state, { result }) => (result ? result.list : state))
    .on(addCity.done, (cities, res) => {
        const { result } = res;
        api.storage.addCity(result.id);
        return [...cities, result];
    })
    .on(removeCity, (cities, id) => {
        api.storage.removeCity(id);
        return cities.filter(city => city.id !== id);
    });
