import React, { useState, useEffect } from 'react';
import ViewContainer from './ViewContainer';

import SearchInterface from '../SearchInterface';

import FavoritesCities from '../FavoritesCities';
import DefaultCity from '../DefaultCity';
import './index.css';
import { initApp, getGeoLocation } from '../../events';

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
