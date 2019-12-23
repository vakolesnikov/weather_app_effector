import actionTypes from '../actionTypes';

export const actionSetCitiesFound = cities => ({
    type: actionTypes.SET_CITIES_FOUND,
    payload: {
        result: cities
    }
});

export const actionRemoveCitiesFound = () => ({
    type: actionTypes.REMOVE_CITIES_FOUND
});

export const actionSetCitiesIds = ids => ({
    type: actionTypes.SET_CITIES_IDS,
    payload: {
        ids
    }
});

export const actionAddCityId = id => ({
    type: actionTypes.ADD_CITY_ID,
    payload: {
        id
    }
});

export const actionRemoveCityId = id => ({
    type: actionTypes.REMOVE_CITY_ID,
    payload: {
        id
    }
});

export const actionRemoveCityWeather = id => ({
    type: actionTypes.REMOVE_CITY_FAVORITES,
    payload: {
        id
    }
});

export const actionSetCitiesWeather = citiesFavorites => ({
    type: actionTypes.SET_FAVORITES_CITIES,
    payload: {
        citiesFavorites
    }
});

export const actionAddCityWeather = cityFavorite => ({
    type: actionTypes.ADD_FAVORITES_CITY,
    payload: {
        cityFavorite
    }
});

export const actionGetUserLocation = () => ({
    type: actionTypes.GET_USER_LOCATION
});

export const actionSuccessLoadUserLocation = city => ({
    type: actionTypes.SUCCESS_LOAD_USER_LOCATION,
    payload: city
});

export const actionErrorLoadUserLocation = () => ({
    type: actionTypes.ERROR_LOAD_USER_LOCATION
});
