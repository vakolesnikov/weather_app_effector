import React, { useState, useEffect } from 'react';
import { initApp, getGeoLocation } from 'src/common-events/events';
import SearchInterface from 'src/components/search-interface';
import FavoritesCities from 'src/components/favorites-cities';
import DefaultCity from 'src/components/default-city';

import ViewContainer from 'src/components/view/view-container';
import './index.css';

const ONE_MINUTE = 60000;

export default function View() {
    useEffect(() => {
        getGeoLocation();
        initApp();

        setInterval(() => initApp(), ONE_MINUTE);
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

            <DefaultCity />

            <FavoritesCities />
            {isVisibleSearchInput && (
                <SearchInterface handleCloseSearchInterface={handleCloseSearchInterface} />
            )}
        </ViewContainer>
    );
}
