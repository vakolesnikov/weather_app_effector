import { createStore } from 'effector';
import { searchCity, removeCitiesFound } from 'src/events';

export const foundCities = createStore([]);

foundCities
    .on(searchCity.done, (_, res) => {
        if (res.result) {
            return res.result.list;
        }
        return [];
    })
    .reset(removeCitiesFound);
