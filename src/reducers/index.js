import actionTypes from '../actionTypes';

const initialState = {
    citiesFavorites: [],
    citiesFound: [],
    citiesIds: [],
    defaultCity: {},
    isLoadUserLocation: false,
    isErrorLoadUserLocation: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CITY_ID: {
            const { citiesIds } = state;
            const { id } = action.payload;

            return {
                ...state,
                citiesIds: [...citiesIds, id]
            };
        }

        case actionTypes.REMOVE_CITY_ID: {
            const { citiesIds } = state;
            const { id } = action.payload;

            const newCitiesIds = citiesIds.filter(cityId => cityId !== id);

            return {
                ...state,
                citiesIds: newCitiesIds
            };
        }

        case actionTypes.REMOVE_CITY_FAVORITES: {
            const { citiesFavorites } = state;
            const { id } = action.payload;

            const newCitiesWeather = citiesFavorites.filter(cityFavorite => cityFavorite.id !== id);

            return {
                ...state,
                citiesFavorites: newCitiesWeather
            };
        }

        case actionTypes.SET_CITIES_FOUND: {
            const { result } = action.payload;

            return {
                ...state,
                citiesFound: result
            };
        }

        case actionTypes.REMOVE_CITIES_FOUND: {
            return {
                ...state,
                citiesFound: []
            };
        }

        case actionTypes.SET_FAVORITES_CITIES: {
            const { citiesFavorites } = action.payload;

            return {
                ...state,
                citiesFavorites
            };
        }

        case actionTypes.SET_CITIES_IDS: {
            const { ids } = action.payload;

            return {
                ...state,
                citiesIds: ids
            };
        }

        case actionTypes.ADD_FAVORITES_CITY: {
            const { citiesFavorites } = state;
            const { cityFavorite } = action.payload;

            return {
                ...state,
                citiesFavorites: [...citiesFavorites, cityFavorite]
            };
        }

        case actionTypes.GET_USER_LOCATION: {
            return {
                ...state,
                isLoadUserLocation: true
            };
        }
        case actionTypes.SUCCESS_LOAD_USER_LOCATION: {
            return {
                ...state,
                isLoadUserLocation: false,
                defaultCity: action.payload
            };
        }
        case actionTypes.ERROR_LOAD_USER_LOCATION: {
            return {
                ...state,
                isLoadUserLocation: false,
                isErrorLoadUserLocation: true
            };
        }

        default: {
            return state;
        }
    }
};
