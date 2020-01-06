import React, { useState, useEffect } from 'react';
import { useStore } from 'effector-react';
import { initApp, getGeoLocation, startUpdate } from 'src/common-events/events';
import SearchInterface from 'src/features/search-interface';
import FavoritesCities from 'src/features/favorites-cities';
import DefaultCity from 'src/features/default-city';
import ViewContainer from 'src/features/view/view-container';
import './index.css';
import { showUpdateLoader, defaultCity } from './model';

const ONE_MINUTE = 60000;

export default function View() {
    const isShowUpdateLoader = useStore(showUpdateLoader);
    const currentDefaultCity = useStore(defaultCity);

    useEffect(() => {
        getGeoLocation();
        initApp();

        setInterval(() => {
            startUpdate();
            initApp();
        }, ONE_MINUTE);
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

            {/*<DefaultCity defaultCity={currentDefaultCity} />*/}

            <FavoritesCities />
            {isVisibleSearchInput && (
                <SearchInterface handleCloseSearchInterface={handleCloseSearchInterface} />
            )}
            {isShowUpdateLoader && <div className="update-data-container">update data...</div>}
        </ViewContainer>
    );
}
