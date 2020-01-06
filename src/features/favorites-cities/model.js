import { createStore } from 'effector';
import api from 'src/api/index';
import { initApp, addCity, removeCity } from 'src/common-events/events';

export const favoriteCities = createStore([])
    .on(initApp.done, (state, { result }) => (result ? result.list : state))
    .on(addCity.done, (cities, res) => {
        const { result } = res;

        if (!cities.find(({ id }) => id === result.id)) {
            api.storage.addCity(result.id);
            return [...cities, result];
        }

        return cities;
    })
    .on(removeCity, (cities, id) => {
        api.storage.removeCity(id);
        return cities.filter(city => city.id !== id);
    });
