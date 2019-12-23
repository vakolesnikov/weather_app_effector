export default {
    addCity: id => {
        const { citiesIds = '' } = localStorage;
        const ids = citiesIds.length ? `${citiesIds},${id}` : String(id);

        localStorage.setItem('citiesIds', ids);
    },

    removeCity: id => {
        const ids = localStorage.getItem('citiesIds').split(',');
        const newIds = ids.filter(cityId => cityId !== String(id)).join();

        localStorage.setItem('citiesIds', newIds);
    },

    getCitiesIds: () => {
        return localStorage.citiesIds
            ? localStorage
                  .getItem('citiesIds')
                  .split(',')
                  .map(item => Number(item))
            : [];
    }
};
