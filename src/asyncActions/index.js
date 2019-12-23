import * as actions from '../actions';
import weatherApi from '../api/weatherApi';

const MAX_CITIES_COUNT = 10;
const MIN_CITY_NAME_LENGTH = 3;

export const searchCity = city => (dispatch, getState, api) => {
    if (city.length >= MIN_CITY_NAME_LENGTH) {
        api.weather.searchCity(city).then(res => {
            if (res.cod === '200') {
                dispatch(actions.actionSetCitiesFound(res.list));
            } else {
                console.error(res);
            }
        });
    } else {
        dispatch(actions.actionSetCitiesFound([]));
    }
};

export const addCity = id => (dispatch, getState, api) => {
    const { citiesIds } = getState();
    if (citiesIds.includes(id) || citiesIds.length >= MAX_CITIES_COUNT) {
        return;
    }

    dispatch(actions.actionAddCityId(id));
    api.weather.getWeatherByCityId(id).then(res => {
        api.storage.addCity(id);
        dispatch(actions.actionAddCityWeather(res));
    });
};

export const removeCity = id => (dispatch, getState, api) => {
    api.storage.removeCity(id);
    dispatch(actions.actionRemoveCityId(id));
    dispatch(actions.actionRemoveCityWeather(id));
};

export const initApp = () => (dispatch, getState, api) => {
    const {
        actionGetUserLocation,
        actionSuccessLoadUserLocation,
        actionErrorLoadUserLocation,
        actionSetCitiesIds,
        actionSetCitiesWeather
    } = actions;
    const citiesIds = api.storage.getCitiesIds();

    dispatch(actionGetUserLocation());

    // setTimeout добавлен в целях демонстрации работы loader'а
    setTimeout(() => {
        api.geolocation.getCurrentPosition(
            (lat, lon) => {
                weatherApi
                    .getWeatherByCityCoordinates(lat, lon)
                    .then(res => {
                        if (res.cod === 200) {
                            dispatch(actionSuccessLoadUserLocation(res));
                        } else {
                            dispatch(actionErrorLoadUserLocation());
                        }
                    })
                    .catch(() => {
                        dispatch(actionErrorLoadUserLocation());
                    });
            },
            () => dispatch(actionErrorLoadUserLocation())
        );
    }, 3000);

    if (citiesIds.length) {
        dispatch(actionSetCitiesIds(citiesIds));
        api.weather
            .getWeatherByGroupCityId(citiesIds)
            .then(res => dispatch(actionSetCitiesWeather(res.list)));
    }
};
