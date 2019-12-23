import { createStore } from 'effector';
import { addCity, searchCity, setCitiesFound } from './events';

export const foundCities = createStore([]);

foundCities.on(searchCity.done, (_, res) => {
    if (res.result) {
        return res.result.list;
    }
    return [];
});
