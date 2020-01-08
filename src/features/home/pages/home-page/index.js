import React, { useState, useEffect } from 'react';
import { useStore } from 'effector-react';

import { DefaultCity, SearchInterface, FavoriteCities } from 'src/ui/organisms';

import * as model from '../../model';

import ViewContainer from './home-container';

export const Home = () => {
    const isShowUpdateLoader = useStore(model.showUpdateLoader);
    const defaultCity = useStore(model.defaultCity);
    const foundCities = useStore(model.foundCities);
    const favoriteCities = useStore(model.favoriteCities);

    useEffect(() => {
        model.getGeoLocation();
        model.initApp();
    }, []);

    const [isVisibleSearchInput, setIsVisibleSearchInput] = useState(false);

    const handleCloseSearchInterface = () => {
        setIsVisibleSearchInput(false);
    };

    const handleClickAddButton = () => {
        setIsVisibleSearchInput(true);
    };

    return (
        <ViewContainer>
            <div className="main-container__logo">Weather</div>
            <button
                type="button"
                className="main-container__add-city-button"
                onClick={handleClickAddButton}
            >
                Add city
            </button>

            <DefaultCity defaultCity={defaultCity} />

            <FavoriteCities favoriteCities={favoriteCities} removeCity={model.removeCity}/>
            {isVisibleSearchInput && (
                <SearchInterface
                    cities={foundCities}
                    handleCloseSearchInterface={handleCloseSearchInterface}
                    addCity={model.addCity}
                    searchCity={model.searchCity}
                    removeCitiesFound={model.removeCitiesFound}
                />
            )}
            {isShowUpdateLoader && <div className="update-data-container">update data...</div>}
        </ViewContainer>
    );
};
